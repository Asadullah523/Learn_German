import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import Quiz from '../components/Quiz';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function LessonView() {
  const { unitId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, isLessonCompleted } = useProgress();
  const [lesson, setLesson] = useState(null);
  const [curriculumData, setCurriculumData] = useState(null);
  const [error, setError] = useState(null);
  const [showCompletion, setShowCompletion] = useState(false);

  // Dynamic import for curriculum to prevent main thread blocking/crashing
  useEffect(() => {
    import('../data/curriculum')
      .then(module => {
        setCurriculumData(module.curriculum);
      })
      .catch(err => {
        console.error("Failed to load curriculum:", err);
        setError("Failed to load lesson data. Please try again.");
      });
  }, []);

  useEffect(() => {
    if (!curriculumData) return;

    console.log("LessonView params:", { unitId, lessonId });
    const unit = curriculumData.units.find(u => u.id === unitId);
    if (unit) {
      const foundLesson = unit.lessons.find(l => l.id === lessonId);
      console.log("Found lesson:", foundLesson);
      setLesson(foundLesson);
    } else {
      console.error("Unit not found:", unitId);
    }
  }, [unitId, lessonId, curriculumData]);

  const handleComplete = () => {
    setShowCompletion(true);
    completeLesson(lesson.id, lesson.xp);
    // Delay navigation to show animation
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (error) {
    return (
      <div className="p-12 text-center text-red-500">
        <div className="text-xl font-bold mb-2">Error</div>
        <p>{error}</p>
        <button onClick={() => navigate('/')} className="mt-4 btn btn-secondary">
          Back to Dashboard
        </button>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="p-12 text-center">
        <div className="text-xl text-muted mb-4">Loading lesson...</div>
        <div className="text-sm text-muted opacity-75 mb-4">
          Looking for: {unitId} / {lessonId}
        </div>
        <button onClick={() => navigate('/')} className="mt-4 btn btn-secondary">
          Back to Dashboard
        </button>
      </div>
    );
  }

  if (lesson.type === 'quiz') {
    return (
      <div className="lesson-view container py-8">
        <button onClick={() => navigate('/')} className="btn btn-secondary mb-6">
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>
        <Quiz data={lesson} onComplete={handleComplete} />
      </div>
    );
  }

  return (
    <div className="lesson-view container animate-fade-in">
      <header className="lesson-header mb-8">
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <div className="header-content">
          <span className="text-sm text-muted uppercase tracking-wider">Lesson</span>
          <h1 className="text-3xl font-bold">{lesson.title}</h1>
        </div>
        <div className="xp-pill">
          +{lesson.xp} XP
        </div>
      </header>

      <div className="content-stack">
        {lesson.content.map((block, index) => (
          <div key={index} className="content-block card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            {block.type === 'text' && (
              <p className="text-lg leading-relaxed">{block.value}</p>
            )}

            {block.type === 'vocabulary' && (
              <div className="vocab-list">
                {block.items.map((item, i) => (
                  <div key={i} className="vocab-item">
                    <div className="vocab-main">
                      <div className="vocab-de">{item.de}</div>
                      {item.pronunciation && (
                        <div className="vocab-pronunciation">/{item.pronunciation}/</div>
                      )}
                    </div>
                    <div className="vocab-en">{item.en}</div>
                    {item.context && <div className="vocab-ctx">{item.context}</div>}
                  </div>
                ))}
              </div>
            )}

            {block.type === 'sentences' && (
              <div className="sentence-list">
                <h4 className="font-bold mb-4 text-lg">Practice Sentences</h4>
                {block.items.map((item, i) => (
                  <div key={i} className="sentence-item mb-4 p-3 bg-surface rounded-lg border border-border">
                    <div className="text-lg font-medium text-primary mb-1">{item.de}</div>
                    {item.pronunciation && (
                      <div className="text-sm text-accent mb-1 font-mono">/{item.pronunciation}/</div>
                    )}
                    <div className="text-muted italic">{item.en}</div>
                  </div>
                ))}
              </div>
            )}

            {block.type === 'dialogue' && (
              <div className="dialogue-container">
                {block.lines.map((line, i) => (
                  <div key={i} className={`dialogue-line ${line.speaker === 'You' ? 'dialogue-right' : 'dialogue-left'}`}>
                    <div className="dialogue-bubble">
                      <div className="dialogue-speaker">{line.speaker}</div>
                      <div className="dialogue-text-de">{line.de}</div>
                      {line.pronunciation && (
                        <div className="dialogue-pronunciation">/{line.pronunciation}/</div>
                      )}
                      <div className="dialogue-text-en">{line.en}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {block.type === 'table' && (
              <div className="table-container">
                <table className="lesson-table">
                  <thead>
                    <tr>
                      {block.headers.map((h, i) => <th key={i}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => <td key={j}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {block.type === 'info' && (
              <div className="info-box">
                <h4 className="font-bold mb-2">{block.title}</h4>
                <p>{block.value}</p>
              </div>
            )}
          </div>
        ))}

        {lesson.recap && (
          <div className="recap-section card animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">✨</span> Chapter Recap
            </h2>
            
            <div className="recap-grid">
              <div className="recap-column">
                <h3 className="font-bold text-primary mb-4">Important Words</h3>
                <ul className="recap-list">
                  {lesson.recap.vocabulary.map((item, i) => (
                    <li key={i}>
                      <span className="font-bold">{item.de}</span>
                      <span className="text-muted text-sm"> - {item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="recap-column">
                <h3 className="font-bold text-secondary mb-4">Daily Life Sentences</h3>
                <ul className="recap-list">
                  {lesson.recap.sentences.map((item, i) => (
                    <li key={i} className="mb-2">
                      <div className="font-medium">{item.de}</div>
                      <div className="text-muted text-sm italic">{item.en}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="lesson-footer mt-12 flex justify-center">
        <button className="btn btn-primary btn-lg" onClick={handleComplete}>
          <CheckCircle size={24} className="mr-2" />
          Complete Chapter
        </button>
      </div>

      {showCompletion && (
        <div className="completion-overlay">
          <div className="completion-content">
            <span className="completion-icon">🎉</span>
            <h2 className="text-3xl font-bold mb-2">Lesson Completed!</h2>
            <p className="text-xl text-muted">+{lesson.xp} XP Earned</p>
          </div>
        </div>
      )}

      <style>{`
        .lesson-view {
          max-width: 800px;
          margin: 0 auto;
          padding-bottom: 4rem;
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .lesson-view {
            max-width: 100%;
            padding: 0;
            padding-bottom: 2rem;
          }
        }

        .recap-section {
          border-top: 4px solid var(--accent);
          background: linear-gradient(to bottom, var(--surface), var(--background));
        }

        .recap-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        @media (max-width: 640px) {
          .recap-grid {
            grid-template-columns: 1fr;
          }
        }

        .recap-list {
          list-style: none;
          padding: 0;
        }

        .recap-list li {
          margin-bottom: var(--spacing-sm);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px dashed var(--border);
        }

        .recap-list li:last-child {
          border-bottom: none;
        }

        .lesson-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }

        .dialogue-bubble {
          max-width: 80%;
          padding: var(--spacing-lg);
          border-radius: var(--radius-xl);
          background: var(--bg-paper);
          border: 2px solid var(--border-book);
          position: relative;
          box-shadow: var(--shadow-page);
        }

        /* Cloud/Speech Bubble Tail */
        .dialogue-left .dialogue-bubble {
          border-bottom-left-radius: 4px;
        }

        .dialogue-right .dialogue-bubble {
          border-bottom-right-radius: 4px;
          background: var(--bg-secondary);
        }

        .dialogue-left .dialogue-bubble::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: -10px;
          width: 20px;
          height: 20px;
          background: var(--bg-paper);
          border-bottom: 2px solid var(--border-book);
          border-left: 2px solid var(--border-book);
          border-radius: 0 0 0 100%;
          z-index: 1;
        }

        .dialogue-right .dialogue-bubble::before {
          content: '';
          position: absolute;
          bottom: -2px;
          right: -10px;
          width: 20px;
          height: 20px;
          background: var(--bg-secondary);
          border-bottom: 2px solid var(--border-book);
          border-right: 2px solid var(--border-book);
          border-radius: 0 0 100% 0;
          z-index: 1;
        }

        /* Completion Animation Overlay */
        .completion-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .completion-content {
          text-align: center;
          animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .completion-icon {
          font-size: 5rem;
          color: var(--accent-sage);
          margin-bottom: var(--spacing-md);
          display: block;
        }

        @keyframes scaleUp {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Table Styles */
        .table-container {
          overflow-x: auto;
          margin-bottom: var(--spacing-lg);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-book);
          background: var(--bg-paper);
        }

        .lesson-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 500px; /* Ensure it doesn't squish too much */
        }

        .lesson-table th,
        .lesson-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--border-book);
          vertical-align: top;
        }

        .lesson-table th {
          background: var(--bg-secondary);
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .lesson-table tr:last-child td {
          border-bottom: none;
        }

        .lesson-table tr:hover td {
          background: rgba(0, 0, 0, 0.02);
        }
      `}</style>
    </div>
  );
}
