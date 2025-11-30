import React from 'react';
import { Lock, Play, Trophy, Star } from 'lucide-react';

export default function UnitCard({ unit, progress, isLocked, onClick }) {
  const { totalLessons, completedLessons } = progress;
  const percentComplete = Math.round((completedLessons / totalLessons) * 100) || 0;
  const isCompleted = percentComplete === 100;

  return (
    <div 
      onClick={!isLocked ? onClick : undefined}
      className={`unit-card group ${isLocked ? 'locked' : 'unlocked'} ${isCompleted ? 'completed' : ''}`}
    >
      {/* Card Header / Background */}
      <div className="card-header">
        <div className="header-content">
          <span className="unit-badge">Unit {unit.id.replace('ch', '')}</span>
          {isCompleted && <div className="completed-badge"><Star size={12} fill="currentColor" /> Done</div>}
        </div>
        <h3 className="unit-title">{unit.title.split(':')[1] || unit.title}</h3>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <p className="unit-description">{unit.description}</p>
        
        <div className="progress-section">
          <div className="progress-labels">
            <span className="progress-text">{completedLessons}/{totalLessons} Lessons</span>
            <span className="progress-percent">{percentComplete}%</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Hover Overlay / Action */}
      {!isLocked && (
        <div className="action-overlay">
          <button className="play-btn">
            <Play size={24} fill="currentColor" className="ml-1" />
          </button>
        </div>
      )}

      {/* Locked Overlay */}
      {isLocked && (
        <div className="locked-overlay">
          <div className="lock-icon-box">
            <Lock size={24} />
          </div>
        </div>
      )}

      <style>{`
        .unit-card {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
          transition: all var(--transition-base);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(0,0,0,0.08); /* Stronger border */
        }

        .unit-card.unlocked:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--text-primary); /* Highlight border on hover */
        }

        .unit-card.locked {
          opacity: 0.6;
          cursor: not-allowed;
          background: var(--bg-secondary);
          filter: grayscale(1);
        }

        .card-header {
          background: var(--gradient-primary);
          padding: var(--spacing-lg);
          color: white;
          position: relative;
        }

        .unit-card.completed .card-header {
          background: var(--gradient-success);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-sm);
        }

        .unit-badge {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: white; /* Solid white for contrast */
          color: var(--text-primary);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
        }

        .completed-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          background: rgba(0,0,0,0.2); /* Darker overlay for text */
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .unit-title {
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: white;
          font-family: 'Outfit', sans-serif;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow for legibility */
        }

        .card-body {
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background: var(--bg-card);
        }

        .unit-description {
          font-size: 1rem;
          color: var(--text-secondary); /* Darker grey */
          margin-bottom: var(--spacing-lg);
          line-height: 1.5;
          flex-grow: 1;
        }

        .progress-section {
          margin-top: auto;
        }

        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary); /* Black text */
          margin-bottom: 8px;
        }

        .progress-track {
          height: 10px; /* Thicker bar */
          background: var(--bg-secondary);
          border-radius: var(--radius-full);
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .unit-card.completed .progress-fill {
          background: var(--gradient-success);
        }

        /* Action Overlay */
        .action-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.1); /* Very subtle overlay */
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .unit-card:hover .action-overlay {
          opacity: 1;
        }

        .play-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: white;
          color: var(--text-primary);
          border: 2px solid var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          transform: scale(0.9);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .unit-card:hover .play-btn {
          transform: scale(1);
        }

        /* Locked Overlay */
        .locked-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(240,240,240,0.5); /* Solid-ish overlay */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lock-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </div>
  );
}

