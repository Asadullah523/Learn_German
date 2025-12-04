import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Trophy, ArrowRight, RefreshCw, Target, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '../hooks/useSound';

export default function Quiz({ data, onComplete }) {
  const navigate = useNavigate();
  const sounds = useSound();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = data.questions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    sounds.click();
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correct;
    
    const newAnswer = {
      question: currentQuestion.text,
      options: currentQuestion.options,
      selectedOption,
      correctOption: currentQuestion.correct,
      isCorrect
    };
    
    setAnswers([...answers, newAnswer]);
    
    if (isCorrect) {
      setScore(score + 1);
      sounds.correct();
    } else {
      sounds.incorrect();
    }
    
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      const finalScore = selectedOption === currentQuestion.correct ? score + 1 : score;
      sounds.success();
      onComplete(finalScore);
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  // Results Screen
  if (showResult) {
    const percentage = Math.round((score / data.questions.length) * 100);
    const correctCount = answers.filter(a => a.isCorrect).length;
    const incorrectCount = answers.filter(a => !a.isCorrect).length;
    
    return (
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Results Card */}
        <div className="glass-panel p-8 text-center">
          <div className="w-24 h-24 mx-auto bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-6">
            <Trophy size={48} className="text-yellow-500" />
          </div>
          
          <h2 className="font-heading font-black text-4xl text-slate-900 dark:text-white mb-4">
            Quiz Complete!
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            {percentage === 100 ? "Perfect Score! 🌟" : 
             percentage >= 70 ? "Great job! 👍" : 
             "Good effort! Keep practicing! 💪"}
          </p>

          {/* Score */}
          <div className="flex items-baseline justify-center gap-3 mb-8">
            <span className="text-7xl font-black text-primary">
              {score}
            </span>
            <span className="text-3xl font-bold text-slate-400">
              / {data.questions.length}
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800">
              <Check className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{correctCount}</div>
              <div className="text-xs text-green-600/70">Correct</div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-2 border-red-200 dark:border-red-800">
              <X className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{incorrectCount}</div>
              <div className="text-xs text-red-600/70">Incorrect</div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
              <div className="text-xs text-blue-600/70">Score</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={handleRetake}
              className="flex-1 btn bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <RefreshCw size={20} className="inline mr-2" />
              Retake Quiz
            </button>
            <button 
              onClick={() => navigate('/')}
              className="flex-1 btn btn-primary py-4 text-lg shadow-xl"
            >
              <Trophy size={20} className="inline mr-2" />
              Dashboard
            </button>
          </div>
        </div>

        {/* Answer Review */}
        <div className="glass-panel p-6">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-primary" size={28} />
            <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              Answer Review
            </h3>
          </div>

          <div className="space-y-4">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border-2 ${
                  answer.isCorrect 
                    ? 'bg-green-50 dark:bg-green-900/10 border-green-300 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-900/10 border-red-300 dark:border-red-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    answer.isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {answer.isCorrect ? <Check size={18} className="text-white" /> : <X size={18} className="text-white" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 dark:text-white mb-3">
                      Q{index + 1}: {answer.question}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 w-24">Your answer:</span>
                        <span className={`font-medium ${
                          answer.isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
                        }`}>
                          {answer.options[answer.selectedOption]}
                        </span>
                      </div>
                      
                      {!answer.isCorrect && (
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 w-24">Correct answer:</span>
                          <span className="font-medium text-green-700 dark:text-green-400">
                            {answer.options[answer.correctOption]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Quiz Questions
  const progressPercentage = Math.round(((currentQuestionIndex) / data.questions.length) * 100);
  const barWidth = ((currentQuestionIndex + 1) / data.questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Question {currentQuestionIndex + 1} of {data.questions.length}
          </span>
          <span className="text-xs font-bold text-primary">
            {progressPercentage}%
          </span>
        </div>
        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${barWidth}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question Card */}
          <div className="glass-panel p-8 mb-8 min-h-[160px] flex items-center justify-center text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 dark:text-white">
              {currentQuestion.text}
            </h3>
          </div>

          {/* Options */}
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "relative p-6 rounded-xl border-2 text-left font-bold text-lg transition-all duration-300 flex justify-between items-center ";
              
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
                  buttonClass += "bg-blue-50 dark:bg-blue-900/20 border-primary text-primary shadow-lg";
                } else {
                  buttonClass += "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1";
                }
              }

              return (
                <button 
                  key={index} 
                  className={buttonClass}
                  onClick={() => handleOptionClick(index)}
                  disabled={isAnswered}
                >
                  <span>{option}</span>
                  {isAnswered && index === currentQuestion.correct && (
                    <Check size={24} className="text-green-500" />
                  )}
                  {isAnswered && index === selectedOption && index !== currentQuestion.correct && (
                    <X size={24} className="text-red-500" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
        {!isAnswered ? (
          <button 
            className={`btn w-full py-5 text-lg shadow-lg transition-all ${
              selectedOption !== null 
                ? 'btn-primary hover:scale-105' 
                : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
            onClick={handleCheck}
            disabled={selectedOption === null}
          >
            Check Answer
          </button>
        ) : (
          <button 
            className="btn btn-primary w-full py-5 text-lg shadow-xl flex items-center justify-center gap-2 hover:scale-105" 
            onClick={handleNext}
          >
            {currentQuestionIndex < data.questions.length - 1 ? (
              <>Next Question <ArrowRight size={20} /></>
            ) : (
              <>Finish Quiz <Trophy size={20} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
