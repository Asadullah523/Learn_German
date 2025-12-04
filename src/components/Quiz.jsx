import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Trophy, ArrowRight, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Quiz({ data, onComplete }) {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = data.questions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correct;
    if (isCorrect) setScore(score + 1);
    
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      onComplete(score + (selectedOption === currentQuestion.correct ? 0 : 0)); // Add last point if correct
    }
  };

  if (showResult) {
    const percentage = Math.round((score / data.questions.length) * 100);
    
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex justify-center p-4"
      >
        <div className="glass-panel p-8 md:p-12 text-center max-w-md w-full flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 bg-yellow-50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 shadow-inner"
          >
            <Trophy size={48} className="text-yellow-500" />
          </motion.div>
          
          <h2 className="font-heading font-black text-3xl text-slate-900 dark:text-white mb-2">Quiz Complete!</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">You scored {percentage}%</p>
          
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-6xl font-black text-primary">{score}</span>
            <span className="text-2xl font-bold text-slate-300 dark:text-slate-600">/ {data.questions.length}</span>
          </div>

          <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            {percentage === 100 ? "Perfekt! You mastered this unit. 🌟" : 
             percentage >= 70 ? "Great job! Keep it up. 👍" : 
             "Good effort! Review the lessons and try again. 💪"}
          </p>
          
          <button onClick={() => navigate('/')} className="btn btn-primary w-full py-4 text-lg shadow-xl">
            Back to Dashboard
          </button>
        </div>
      </motion.div>
    );
  }

  const progressPercentage = data.questions && data.questions.length > 0 
    ? Math.min(100, Math.round(((currentQuestionIndex) / data.questions.length) * 100))
    : 0;

  const barWidth = data.questions && data.questions.length > 0
    ? Math.min(100, ((currentQuestionIndex + 1) / data.questions.length) * 100)
    : 0;

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-0">
      {/* Header / Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Question {currentQuestionIndex + 1} of {data.questions.length}
          </span>
          <span className="text-xs font-bold text-primary">
            {progressPercentage}%
          </span>
        </div>
        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${barWidth}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-primary rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question */}
          <div className="glass-panel p-8 mb-8 min-h-[160px] flex items-center justify-center text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 dark:text-white leading-tight">
              {currentQuestion.text}
            </h3>
          </div>

          {/* Options */}
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "relative p-6 rounded-xl border-2 text-left font-bold text-lg transition-all duration-200 flex justify-between items-center group ";
              
              if (isAnswered) {
                if (index === currentQuestion.correct) {
                  buttonClass += "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400";
                } else if (index === selectedOption) {
                  buttonClass += "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400";
                } else {
                  buttonClass += "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 opacity-50";
                }
              } else {
                if (selectedOption === index) {
                  buttonClass += "bg-blue-50 dark:bg-blue-900/20 border-primary text-primary shadow-md transform scale-[1.01]";
                } else {
                  buttonClass += "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary/50 hover:shadow-sm hover:-translate-y-1";
                }
              }

              return (
                <button 
                  key={index} 
                  className={buttonClass}
                  onClick={() => handleOptionClick(index)}
                  disabled={isAnswered}
                >
                  <span className="relative z-10">{option}</span>
                  {isAnswered && index === currentQuestion.correct && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <Check size={24} className="text-green-500" />
                    </motion.div>
                  )}
                  {isAnswered && index === selectedOption && index !== currentQuestion.correct && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <X size={24} className="text-red-500" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Actions */}
      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
        {!isAnswered ? (
          <button 
            className={`btn w-full py-4 text-lg shadow-lg transition-all ${selectedOption !== null ? 'btn-primary' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
            onClick={handleCheck}
            disabled={selectedOption === null}
          >
            Check Answer
          </button>
        ) : (
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="btn btn-primary w-full py-4 text-lg shadow-lg flex items-center justify-center gap-2" 
            onClick={handleNext}
          >
            {currentQuestionIndex < data.questions.length - 1 ? (
              <>Next Question <ArrowRight size={20} /></>
            ) : (
              <>Finish Quiz <Trophy size={20} /></>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}
