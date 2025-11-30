import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Trophy, ArrowRight, RefreshCw } from 'lucide-react';

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
      <div className="quiz-result animate-fade-in">
        <div className="result-card">
          <div className="trophy-icon">
            <Trophy size={48} className="text-gold" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-muted mb-8">You scored {percentage}%</p>
          
          <div className="score-circle mb-8">
            <span className="score-value">{score}</span>
            <span className="score-total">/ {data.questions.length}</span>
          </div>

          <p className="result-message mb-8">
            {percentage === 100 ? "Perfekt! You mastered this unit." : 
             percentage >= 70 ? "Great job! Keep it up." : 
             "Good effort! Review the lessons and try again."}
          </p>
          
          <button onClick={() => navigate('/')} className="btn btn-primary w-full">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const progressPercentage = data.questions && data.questions.length > 0 
    ? Math.min(100, Math.round(((currentQuestionIndex) / data.questions.length) * 100))
    : 0;

  const barWidth = data.questions && data.questions.length > 0
    ? Math.min(100, ((currentQuestionIndex + 1) / data.questions.length) * 100)
    : 0;

  return (
    <div className="quiz-container animate-slide-up">
      {/* Header / Progress */}
      <div className="quiz-header mb-8">
        <div className="quiz-header-top">
          <span className="quiz-question-count">
            Question {currentQuestionIndex + 1} of {data.questions.length}
          </span>
          <span className="quiz-progress-text">
            {progressPercentage}%
          </span>
        </div>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${barWidth}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="question-card mb-8">
        <h3 className="text-2xl font-bold text-center">{currentQuestion.text}</h3>
      </div>

      {/* Options */}
      <div className="options-grid">
        {currentQuestion.options.map((option, index) => {
          let className = "option-btn";
          if (selectedOption === index) className += " selected";
          if (isAnswered) {
            if (index === currentQuestion.correct) className += " correct";
            else if (index === selectedOption) className += " wrong";
            else className += " dimmed";
          }

          return (
            <button 
              key={index} 
              className={className}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
            >
              <span className="option-text">{option}</span>
              {isAnswered && index === currentQuestion.correct && <Check size={24} className="text-success" />}
              {isAnswered && index === selectedOption && index !== currentQuestion.correct && <X size={24} className="text-error" />}
            </button>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="quiz-footer mt-8">
        {!isAnswered ? (
          <button 
            className="btn btn-primary w-full btn-lg" 
            onClick={handleCheck}
            disabled={selectedOption === null}
          >
            Check Answer
          </button>
        ) : (
          <button className="btn btn-primary w-full btn-lg" onClick={handleNext}>
            {currentQuestionIndex < data.questions.length - 1 ? (
              <span className="flex items-center gap-2">Next Question <ArrowRight size={20} /></span>
            ) : (
              <span className="flex items-center gap-2">Finish Quiz <Trophy size={20} /></span>
            )}
          </button>
        )}
      </div>

      <style>{`
        .quiz-container {
          max-width: 600px;
          margin: 0 auto;
          padding: var(--spacing-lg);
        }

        .quiz-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 8px;
        }

        .quiz-question-count {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .quiz-progress-text {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .progress-track {
          height: 8px;
          background: var(--bg-secondary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .question-card {
          padding: var(--spacing-xl);
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(0,0,0,0.05);
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .options-grid {
          display: grid;
          gap: var(--spacing-md);
        }

        .option-btn {
          padding: var(--spacing-lg);
          border: 2px solid var(--bg-secondary);
          border-radius: var(--radius-lg);
          background: var(--bg-card);
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .option-btn:hover:not(:disabled) {
          transform: translateY(-4px) scale(1.01);
          border-color: var(--text-primary);
          box-shadow: var(--shadow-md);
        }

        .option-btn:active:not(:disabled) {
          transform: scale(0.98);
        }

        .option-btn.selected {
          border-color: #6366F1; /* Indigo */
          background: #EEF2FF;
          color: #4338CA;
        }

        .option-btn.correct {
          border-color: #10B981; /* Emerald */
          background: #ECFDF5;
          color: #065F46;
        }

        .option-btn.wrong {
          border-color: #EF4444; /* Red */
          background: #FEF2F2;
          color: #991B1B;
        }
        
        .option-btn.dimmed {
          opacity: 0.5;
        }

        .text-success { color: #10B981; }
        .text-error { color: #EF4444; }
        .text-gold { color: #F59E0B; }

        /* Result Card */
        .quiz-result {
          display: flex;
          justify-content: center;
          padding: var(--spacing-xl);
        }

        .result-card {
          background: var(--bg-card);
          padding: var(--spacing-2xl);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
          text-align: center;
          max-width: 400px;
          width: 100%;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .trophy-icon {
          width: 80px;
          height: 80px;
          background: #FFFBEB;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-lg);
        }

        .score-circle {
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
        }

        .score-value {
          font-size: 4rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }

        .score-total {
          font-size: 1.5rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }
        
        .w-full {
          width: 100%;
        }
        
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
        .justify-end { justify-content: flex-end; }
        .justify-center { justify-content: center; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-8 { margin-top: 2rem; }
        .text-center { text-align: center; }
        .text-2xl { font-size: 1.5rem; }
        .font-bold { font-weight: 700; }
      `}</style>
    </div>
  );
}
