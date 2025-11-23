import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import Quiz from '../components/Quiz';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function LessonView() {
  const { unitId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, isLessonCompleted } = useProgress();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const unit = curriculum.units.find(u => u.id === unitId);
    if (unit) {
      const foundLesson = unit.lessons.find(l => l.id === lessonId);
      setLesson(foundLesson);
    }
  }, [unitId, lessonId]);

  if (!lesson) return <div className="p-8 text-center">Loading...</div>;

  const handleComplete = () => {
    completeLesson(lesson.id, lesson.xp);
    navigate('/');
  };

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
          padding: var(--spacing-md);
          border-radius: var(--radius-lg);
          background: var(--background);
          border: 1px solid var(--border);
          word-wrap: break-word;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .dialogue-bubble {
            max-width: 92%;
            padding: var(--spacing-sm);
          }
        }

        .back-btn {
          padding: var(--spacing-sm);
          border-radius: 50%;
          background: var(--surface);
          border: 1px solid var(--border);
          transition: all 0.2s;
        }

        .back-btn:hover {
          background: var(--background);
          transform: translateX(-2px);
        }

        .xp-pill {
          margin-left: auto;
          background: var(--accent);
          color: white;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-weight: bold;
        }

        .content-stack {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .content-block {
          padding: var(--spacing-xl);
          max-width: 100%;
          box-sizing: border-box;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        @media (max-width: 768px) {
          .content-block {
            padding: var(--spacing-md);
          }
        }

        .vocab-list {
          display: grid;
          gap: var(--spacing-md);
        }

        @media (max-width: 640px) {
          .vocab-list {
            grid-template-columns: 1fr;
          }
          
          .vocab-item {
            grid-template-columns: 1fr;
            gap: var(--spacing-sm);
          }
          
          .vocab-main {
            margin-bottom: var(--spacing-xs);
          }
        }

        .vocab-item {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          align-items: center;
          padding: var(--spacing-md);
          background: var(--background);
          border-radius: var(--radius-md);
        }

        /* ... (existing styles) ... */

        .table-container {
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-bottom: var(--spacing-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          box-sizing: border-box;
        }

        .lesson-table {
          width: 100%;
          border-collapse: collapse;
          /* Removed min-width: 500px that was causing overflow */
        }

        .lesson-table th, .lesson-table td {
          padding: var(--spacing-md);
          text-align: left;
          border-bottom: 1px solid var(--border);
        }

        .lesson-table th {
          font-weight: bold;
          color: var(--text-muted);
          text-transform: uppercase;
          font-size: 0.875rem;
          background-color: var(--background);
        }

        @media (max-width: 768px) {
          .lesson-table th, .lesson-table td {
            padding: 0.5rem; /* Reduced padding for mobile */
            font-size: 0.875rem; /* Smaller font for mobile */
            word-break: break-word; /* Force wrapping */
            hyphens: auto;
          }
          
          .lesson-table th {
            font-size: 0.75rem;
          }
        }

        .info-box {
          background: rgba(245, 158, 11, 0.1);
          border-left: 4px solid var(--accent);
          padding: var(--spacing-md);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }

        .btn-lg {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
