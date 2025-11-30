import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, Lock, BookOpen, MessageCircle, PenTool, Star } from 'lucide-react';

export default function LessonCard({ lesson, unitId, isCompleted, isLocked }) {
  
  const getIcon = (type) => {
    switch(type) {
      case 'quiz': return <PenTool size={20} />;
      case 'dialogue': return <MessageCircle size={20} />;
      default: return <BookOpen size={20} />;
    }
  };

  return (
    <Link 
      to={!isLocked ? `/learn/${unitId}/${lesson.id}` : '#'}
      className={`lesson-card-link ${isLocked ? 'pointer-events-none' : ''}`}
    >
      <div className={`lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}>
        <div className="lesson-icon-box">
          {isCompleted ? <CheckCircle size={24} /> : (isLocked ? <Lock size={24} /> : getIcon(lesson.type))}
        </div>
        
        <div className="lesson-info">
          <h4 className="lesson-title">{lesson.title}</h4>
          <div className="lesson-meta">
            <span className="lesson-type">{lesson.type}</span>
            <span className="lesson-xp">+{lesson.xp} XP</span>
          </div>
        </div>

        <div className="lesson-action">
          {!isLocked && (
            isCompleted ? 
            <div className="status-badge completed">
              <Star size={14} fill="currentColor" /> Done
            </div> : 
            <div className="status-badge start">
              Start
            </div>
          )}
        </div>
      </div>

      <style>{`
        .lesson-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .lesson-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: white;
          border: 1px solid var(--bg-secondary);
          border-radius: var(--radius-lg);
          transition: all 0.2s ease;
          position: relative;
        }

        .lesson-card:hover {
          transform: translateX(4px);
          background: var(--bg-primary);
          border-color: var(--text-muted);
          box-shadow: var(--shadow-sm);
        }

        .lesson-card.locked {
          opacity: 0.6;
          background: var(--bg-secondary);
          border-color: transparent;
        }

        .lesson-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .lesson-card:hover .lesson-icon-box {
          background: var(--gradient-primary);
          color: white;
        }

        .lesson-card.completed .lesson-icon-box {
          background: var(--gradient-success);
          color: white;
        }

        .lesson-info {
          flex-grow: 1;
        }

        .lesson-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .lesson-meta {
          display: flex;
          gap: 12px;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .lesson-xp {
          color: var(--text-secondary);
        }

        .lesson-action {
          flex-shrink: 0;
        }

        .status-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .status-badge.start {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .lesson-card:hover .status-badge.start {
          background: var(--text-primary);
          color: white;
        }

        .status-badge.completed {
          color: #10B981;
          background: rgba(16, 185, 129, 0.1);
        }
      `}</style>
    </Link>
  );
}

