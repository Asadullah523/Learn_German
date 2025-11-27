import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { RotateCcw, Moon, Sun, Trash2, AlertTriangle } from 'lucide-react';

export default function Settings() {
  const { progress, resetProgress } = useProgress();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  };

  const handleResetProgress = () => {
    if (resetProgress) {
      resetProgress();
      setShowConfirmReset(false);
    }
  };

  // Apply dark mode on mount
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="settings-page animate-fade-in">
      <header className="settings-header">
        <h1 className="settings-title">Settings ⚙️</h1>
        <p className="settings-subtitle">Customize your learning experience</p>
      </header>

      {/* Theme Toggle */}
      <section className="settings-section">
        <div className="section-header">
          <h2>Appearance</h2>
          <p className="section-description">Customize the look and feel</p>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <div className="setting-icon">
              {darkMode ? <Moon size={24} /> : <Sun size={24} />}
            </div>
            <div className="setting-text">
              <h3>Dark Mode</h3>
              <p>Better for night reading</p>
            </div>
          </div>
          <button 
            className={`toggle-switch ${darkMode ? 'active' : ''}`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <div className="toggle-slider"></div>
          </button>
        </div>
      </section>

      {/* Progress Info */}
      <section className="settings-section">
        <div className="section-header">
          <h2>Your Progress</h2>
          <p className="section-description">Current learning statistics</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{progress.streak}</div>
            <div className="stat-label">Day Streak 🔥</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{progress.xp}</div>
            <div className="stat-label">Total XP</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{progress.completedLessons?.length || 0}</div>
            <div className="stat-label">Lessons Done</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{progress.level}</div>
            <div className="stat-label">Level</div>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="settings-section danger-zone">
        <div className="section-header">
          <h2>Danger Zone</h2>
          <p className="section-description">Irreversible actions - proceed with caution</p>
        </div>
        
        {!showConfirmReset ? (
          <button className="danger-button" onClick={() => setShowConfirmReset(true)}>
            <RotateCcw size={20} />
            <span>Reset All Progress</span>
          </button>
        ) : (
          <div className="confirm-reset">
            <div className="warning-box">
              <AlertTriangle size={24} />
              <div>
                <h4>Are you absolutely sure?</h4>
                <p>This will permanently delete all your progress, XP, streak, and completed lessons. This action cannot be undone.</p>
              </div>
            </div>
            <div className="confirm-actions">
              <button className="btn-secondary" onClick={() => setShowConfirmReset(false)}>
                Cancel
              </button>
              <button className="btn-danger" onClick={handleResetProgress}>
                <Trash2 size={18} />
                Yes, Reset Everything
              </button>
            </div>
          </div>
        )}
      </section>

      <style>{`
        .settings-page {
          padding: var(--spacing-xl) var(--spacing-md);
          max-width: 900px;
          margin: 0 auto;
        }

        .settings-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .settings-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
          font-family: 'Crimson Text', serif;
        }

        .settings-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
          font-style: italic;
        }

        .settings-section {
          background: var(--bg-paper);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-lg);
          border: var(--border-book);
          box-shadow: var(--shadow-page);
        }

        .section-header {
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid rgba(139, 115, 85, 0.15);
        }

        .section-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
          font-family: 'Crimson Text', serif;
        }

        .section-description {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-lg);
          background: rgba(212, 165, 116, 0.05);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(212, 165, 116, 0.1);
        }

        .setting-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .setting-icon {
          width: 48px;
          height: 48px;
          background: var(--gradient-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-page);
        }

        .setting-text h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .setting-text p {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .toggle-switch {
          width: 60px;
          height: 32px;
          background: rgba(139, 115, 85, 0.2);
          border-radius: var(--radius-full);
          position: relative;
          transition: background var(--transition-base);
          border: 1px solid rgba(139, 115, 85, 0.3);
        }

        .toggle-switch.active {
          background: var(--gradient-gold);
        }

        .toggle-slider {
          width: 26px;
          height: 26px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
          transition: transform var(--transition-base);
          box-shadow: var(--shadow-page);
        }

        .toggle-switch.active .toggle-slider {
          transform: translateX(28px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--spacing-md);
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.08), rgba(184, 147, 106, 0.05));
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid rgba(212, 165, 116, 0.15);
          transition: all var(--transition-base);
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-page);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-gold);
          font-family: 'Crimson Text', serif;
          line-height: 1;
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .danger-zone {
          border-color: rgba(139, 69, 69, 0.3);
        }

        .danger-button {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) var(--spacing-lg);
          background: linear-gradient(135deg, rgba(139, 69, 69, 0.1), rgba(139, 69, 69, 0.05));
          color: var(--accent-burgundy);
          border: 2px solid rgba(139, 69, 69, 0.3);
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all var(--transition-base);
          width: 100%;
          justify-content: center;
        }

        .danger-button:hover {
          background: rgba(139, 69, 69, 0.15);
          border-color: var(--accent-burgundy);
          transform: translateY(-2px);
        }

        .confirm-reset {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .warning-box {
          display: flex;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: rgba(245, 158, 11, 0.1);
          border: 2px solid rgba(245, 158, 11, 0.3);
          border-radius: var(--radius-md);
          color: #92400E;
        }

        .warning-box h4 {
          font-weight: 700;
          margin-bottom: var(--spacing-xs);
          color: #92400E;
        }

        .warning-box p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .confirm-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: flex-end;
        }

        .btn-secondary {
          padding: var(--spacing-sm) var(--spacing-lg);
          background: var(--bg-paper);
          color: var(--text-primary);
          border: var(--border-book);
          border-radius: var(--radius-md);
          font-weight: 600;
          transition: all var(--transition-base);
        }

        .btn-secondary:hover {
          background: rgba(212, 165, 116, 0.1);
          border-color: var(--accent-gold);
        }

        .btn-danger {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-lg);
          background: var(--accent-burgundy);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          transition: all var(--transition-base);
        }

        .btn-danger:hover {
          background: #6B3333;
          transform: translateY(-2px);
          box-shadow: var(--shadow-page);
        }

        @media (max-width: 768px) {
          .settings-page {
            padding: var(--spacing-md) var(--spacing-sm);
          }

          .settings-title {
            font-size: 1.85rem;
          }

          .settings-section {
            padding: var(--spacing-lg);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .confirm-actions {
            flex-direction: column-reverse;
          }

          .btn-secondary,
          .btn-danger {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
