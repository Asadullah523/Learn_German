import React from 'react';
import { useProgress } from '../context/ProgressContext';

export default function DailyProgress() {
  const { progress, getTodayXP, getWeeklyActivity } = useProgress();
  const weeklyData = getWeeklyActivity();
  const todayXP = getTodayXP();
  const dailyGoal = 100; // XP goal per day

  return (
    <div className="daily-progress-card">
      {/* Streak Counter */}
      <div className="streak-section">
        <div className="streak-icon fire-icon">🔥</div>
        <div className="streak-info">
          <div className="streak-number">{progress.streak}</div>
          <div className="streak-label">Day Streak</div>
        </div>
        <div className="streak-message">
          {progress.streak === 1 && "Start your journey!"}
          {progress.streak > 1 && progress.streak < 7 && "Keep it up!"}
          {progress.streak >= 7 && progress.streak < 30 && "Impressive streak!"}
          {progress.streak >= 30 && "Unstoppable! 🌟"}
        </div>
      </div>

      {/* Today's Progress */}
      <div className="today-progress">
        <div className="progress-header">
          <span className="progress-label">Today's XP</span>
          <span className="progress-value">{todayXP} / {dailyGoal}</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill-today" 
            style={{ width: `${Math.min((todayXP / dailyGoal) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Weekly Heatmap */}
      <div className="weekly-heatmap">
        <div className="heatmap-title">This Week</div>
        <div className="heatmap-grid">
          {weeklyData.map((day, index) => {
            const intensity = day.xp > 0 ? Math.min(day.xp / 50, 1) : 0;
            return (
              <div key={index} className="heatmap-day">
                <div 
                  className="heatmap-cell"
                  style={{ 
                    backgroundColor: intensity > 0 
                      ? `rgba(139, 157, 124, ${0.2 + intensity * 0.8})` 
                      : 'rgba(139, 115, 85, 0.05)'
                  }}
                  title={`${day.dayName}: ${day.xp} XP`}
                />
                <div className="heatmap-label">{day.dayName.charAt(0)}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .daily-progress-card {
          background: var(--bg-paper);
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-page);
          border: var(--border-book);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          height: 100%;
        }

        .streak-section {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(184, 147, 106, 0.05));
          border-radius: var(--radius-full);
          border: 1px solid rgba(212, 165, 116, 0.2);
        }

        .streak-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .streak-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .streak-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-gold);
          line-height: 1;
          font-family: 'Crimson Text', serif;
        }

        .streak-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .streak-message {
          font-size: 0.75rem;
          color: var(--accent-burgundy);
          font-weight: 600;
          font-style: italic;
        }

        .today-progress {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .progress-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .progress-value {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold);
        }

        .progress-bar-container {
          height: 8px;
          background: rgba(139, 115, 85, 0.1);
          border-radius: var(--radius-full);
          overflow: hidden;
          box-shadow: var(--shadow-inset);
        }

        .progress-bar-fill-today {
          height: 100%;
          background: var(--gradient-gold);
          border-radius: var(--radius-full);
          transition: width 0.5s ease-out;
          box-shadow: 0 0 8px rgba(212, 165, 116, 0.4);
        }

        .weekly-heatmap {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .heatmap-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .heatmap-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
        }

        .heatmap-day {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .heatmap-cell {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid rgba(139, 115, 85, 0.1);
          transition: all var(--transition-base);
        }

        .heatmap-cell:hover {
          transform: scale(1.2);
          box-shadow: var(--shadow-page);
        }

        .heatmap-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .streak-number {
            font-size: 1.5rem;
          }

          .streak-icon {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
