import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, BookOpen } from 'lucide-react';

export default function ChapterCard({ lesson, unitId, isCompleted, chapterIndex }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Get first 3 vocabulary words as preview (if available from curriculum data)
  const vocabPreview = lesson.preview || ["Hallo", "Guten Tag", "Danke"];

  return (
    <Link 
      to={`/learn/${unitId}/${lesson.id}`}
      className="chapter-card-link"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`chapter-card ${isCompleted ? 'completed' : ''} ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card */}
        <div className="card-face card-front">
          {/* Chapter number removed as requested */}
          
          <div className="chapter-icon-large">
            {isCompleted ? <CheckCircle size={32} /> : <BookOpen size={32} />}
          </div>
          
          <h3 className="chapter-title">{lesson.title}</h3>
          
          {isCompleted && (
            <div className="completion-badge">
              <CheckCircle size={16} />
              <span>Completed</span>
            </div>
          )}
          
          <div className="xp-indicator">
            <span className="xp-value">{lesson.xp}</span>
            <span className="xp-label">XP</span>
          </div>
          
          {/* Page curl effect corner */}
          <div className="page-curl"></div>
        </div>

        {/* Back of card - Content preview */}
        <div className="card-face card-back">
          <div className="back-header">
            <BookOpen size={20} />
            <span>Chapter Preview</span>
          </div>
          
          <div className="preview-section">
            <div className="preview-label">You'll learn:</div>
            <ul className="vocab-preview">
              {vocabPreview.slice(0, 3).map((word, i) => (
                <li key={i}>{word}</li>
              ))}
              <li className="more-indicator">...and more!</li>
            </ul>
          </div>
          
          <div className="start-button">
            <Play size={16} />
            <span>{isCompleted ? 'Review' : 'Start Learning'}</span>
          </div>
        </div>
      </div>

      <style>{`
        .chapter-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          perspective: 1000px;
        }

        .chapter-card {
          position: relative;
          width: 100%;
          height: 280px;
          transition: transform var(--transition-base);
          transform-style: preserve-3d;
          will-change: transform;
        }

        .chapter-card.flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: var(--bg-paper);
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-page);
          border: var(--border-book);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
        }

        /* Paper texture */
        .card-face::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(139, 115, 85, 0.01) 2px,
              rgba(139, 115, 85, 0.01) 4px
            );
          pointer-events: none;
          border-radius: var(--radius-lg);
          opacity: 0.5;
        }

        .card-front {
          z-index: 2;
        }

        .card-back {
          transform: rotateY(180deg);
          background: linear-gradient(135deg, var(--bg-aged-paper), var(--bg-paper));
        }

        .chapter-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: absolute;
          top: var(--spacing-md);
          left: var(--spacing-md);
        }

        .page-curl {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 30px 30px 0;
          border-color: transparent var(--bg-secondary) transparent transparent;
          filter: drop-shadow(-2px 2px 2px rgba(0,0,0,0.1));
        }

        .chapter-icon-large {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.15), rgba(184, 147, 106, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
          margin: var(--spacing-sm) 0;
        }

        .chapter-card.completed .chapter-icon-large {
          background: linear-gradient(135deg, rgba(139, 157, 124, 0.2), rgba(107, 125, 92, 0.1));
          color: var(--accent-sage);
        }

        .chapter-title {
          font-size: 1.1rem;
          font-weight: 600;
          text-align: center;
          color: var(--text-primary);
          font-family: 'Crimson Text', serif;
          margin: 0;
        }

        .completion-badge {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: 4px 12px;
          background: linear-gradient(135deg, rgba(139, 157, 124, 0.15), rgba(107, 125, 92, 0.1));
          border: 1px solid rgba(139, 157, 124, 0.3);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-sage);
        }

        .xp-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          bottom: var(--spacing-md);
          right: var(--spacing-md);
        }

        .xp-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-gold);
          line-height: 1;
          font-family: 'Crimson Text', serif;
        }

        .xp-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        /* Back of card styling */
        .back-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .preview-section {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .preview-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          font-style: italic;
        }

        .vocab-preview {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .vocab-preview li {
          font-size: 1rem;
          color: var(--text-secondary);
          padding: var(--spacing-xs) var(--spacing-sm);
          background: rgba(212, 165, 116, 0.08);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--accent-gold);
          font-family: 'Crimson Text', serif;
        }

        .more-indicator {
          font-style: italic;
          color: var(--text-muted);
          border-left-color: var(--text-muted) !important;
        }

        .start-button {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--gradient-gold);
          color: white;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: var(--shadow-page);
          margin-top: auto;
        }

        .chapter-card-link:hover .chapter-card:not(.flipped) {
          transform: translateY(-4px);
          box-shadow: var(--shadow-page-hover);
        }

        @media (max-width: 768px) {
          .chapter-card {
            height: 240px;
          }

          .chapter-icon-large {
            width: 48px;
            height: 48px;
          }

          .chapter-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </Link>
  );
}
