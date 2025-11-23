import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function Quiz({ data, onComplete }) {
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
    return (
      <div className="quiz-result card text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <div className="score-display mb-6">
          <span className="text-4xl font-bold text-primary">{score}</span>
          <span className="text-xl text-muted"> / {data.questions.length}</span>
        </div>
        <p className="mb-6">
          {score === data.questions.length 
            ? "Perfekt! You mastered this unit." 
            : "Good effort! Keep practicing."}
        </p>
        <button onClick={() => window.history.back()} className="btn btn-primary">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container card animate-slide-up">
      <div className="quiz-header mb-6">
        <span className="text-sm font-bold text-muted">
          Question {currentQuestionIndex + 1} of {data.questions.length}
        </span>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${((currentQuestionIndex) / data.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-6">{currentQuestion.text}</h3>

      <div className="options-grid">
        {currentQuestion.options.map((option, index) => {
          let className = "option-btn";
          if (selectedOption === index) className += " selected";
          if (isAnswered) {
            if (index === currentQuestion.correct) className += " correct";
            else if (index === selectedOption) className += " wrong";
          }

          return (
            <button 
              key={index} 
              className={className}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
            >
              {option}
              {isAnswered && index === currentQuestion.correct && <Check size={20} />}
              {isAnswered && index === selectedOption && index !== currentQuestion.correct && <X size={20} />}
            </button>
          );
        })}
      </div>

      <div className="quiz-footer mt-8 flex justify-end">
        {!isAnswered ? (
          <button 
            className="btn btn-primary" 
            onClick={handleCheck}
            disabled={selectedOption === null}
          >
            Check Answer
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleNext}>
            {currentQuestionIndex < data.questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </button>
        )}
      </div>

      <style>{`
        .quiz-container {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .options-grid {
          display: grid;
          gap: var(--spacing-md);
        }

        .option-btn {
          padding: var(--spacing-lg);
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--surface);
          text-align: left;
          font-size: 1.1rem;
          transition: all 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .option-btn:hover:not(:disabled) {
          border-color: var(--primary);
          background: var(--background);
        }

        .option-btn.selected {
          border-color: var(--primary);
          background: rgba(79, 70, 229, 0.05);
        }

        .option-btn.correct {
          border-color: var(--secondary);
          background: rgba(16, 185, 129, 0.1);
          color: var(--secondary);
        }

        .option-btn.wrong {
          border-color: var(--error);
          background: rgba(239, 68, 68, 0.1);
          color: var(--error);
        }
      `}</style>
    </div>
  );
}
