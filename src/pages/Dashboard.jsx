import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { curriculum } from '../data/curriculum';
import DailyProgress from '../components/DailyProgress';
import MotivationalQuote from '../components/MotivationalQuote';
import ChapterCard from '../components/ChapterCard';

export default function Dashboard() {
  const { progress, isLessonCompleted } = useProgress();

  // Calculate overall progress
  const totalLessons = curriculum.units.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const completedCount = progress.completedLessons.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  // Get time of day for greeting
  const hour = new Date().getHours();
  let greeting = 'Good Morning';
  if (hour < 5) greeting = 'Burning the Midnight Oil? 🌙';
  else if (hour < 12) greeting = 'Good Morning';
  else if (hour < 18) greeting = 'Good Afternoon';
  else greeting = 'Good Evening';

  return (
    <div className="dashboard-container animate-fade-in">
      {/* Hero Section with Greeting */}
      <section className="hero-section">
        <div className="greeting-box">
          <h1 className="greeting">{greeting}</h1>
          <p className="hero-subtitle">Ready to continue your German journey?</p>
        </div>
        
        <div className="overall-progress-card">
          <div className="progress-content-wrapper">
            <div className="progress-circle-section">
              <div className="progress-circle">
                <svg viewBox="0 0 100 100" className="progress-ring">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(139, 115, 85, 0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="8"
                    strokeDasharray={`${progressPercentage * 2.64} 264`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="progress-ring-fill"
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4A574" />
                      <stop offset="100%" stopColor="#B8936A" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="progress-percentage">{progressPercentage}%</div>
              </div>
              <div className="course-info">
                <h2 className="course-title">German A1</h2>
                <p className="author-credit">From Zero to Hero</p>
              </div>
            </div>
            
            <div className="stats-pills">
              <div className="stat-pill">
                <span className="stat-pill-value">{completedCount}</span>
                <span className="stat-pill-label">Done</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-value">{totalLessons - completedCount}</span>
                <span className="stat-pill-label">Left</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-value">{progress.xp}</span>
                <span className="stat-pill-label">XP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation & Progress Grid */}
      <section className="motivation-section">
        <div className="motivation-grid">
          <DailyProgress />
          <MotivationalQuote />
        </div>
      </section>

      {/* Learning Path */}
      <section className="learning-path">
        {curriculum.units.map((unit, unitIndex) => (
          <div key={unit.id} className="unit-chapter animate-slide-up" style={{ animationDelay: `${unitIndex * 0.1}s` }}>
            <div className="unit-header-section">
              <div className="unit-number">Unit {unitIndex + 1}</div>
              <div className="unit-info">
                <h2 className="unit-title">{unit.title}</h2>
                <p className="unit-description">{unit.description}</p>
              </div>
            </div>
            
            <div className="chapters-grid">
              {unit.lessons.map((lesson, lessonIndex) => (
                <ChapterCard
                  key={lesson.id}
                  lesson={lesson}
                  unitId={unit.id}
                  isCompleted={isLessonCompleted(lesson.id)}
                  chapterIndex={lessonIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <style>{`
        .dashboard-container {
          padding: var(--spacing-xl) var(--spacing-md);
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .greeting-box {
          text-align: center;
          padding: var(--spacing-lg);
        }

        .greeting {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
          font-family: 'Crimson Text', serif;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .overall-progress-card {
          background: var(--bg-paper);
          border-radius: var(--radius-xl);
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-book);
          border: var(--border-book);
          position: relative;
          overflow: hidden;
        }

        .overall-progress-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--gradient-gold);
        }

        .progress-content-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-xl);
        }

        .progress-circle-section {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }

        .progress-circle {
          position: relative;
          width: 80px;
          height: 80px;
          flex-shrink: 0;
        }

        .progress-ring {
          width: 100%;
          height: 100%;
          transform: rotate(0deg);
        }

        .progress-ring-fill {
          transition: stroke-dasharray 1s ease-out;
        }

        .progress-percentage {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--accent-gold);
          font-family: 'Crimson Text', serif;
        }

        .course-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
          font-family: 'Crimson Text', serif;
        }

        .author-credit {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-style: italic;
        }

        .stats-pills {
          display: flex;
          gap: var(--spacing-md);
        }

        .stat-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-sm) var(--spacing-lg);
          background: rgba(212, 165, 116, 0.08);
          border-radius: var(--radius-full);
          border: 1px solid rgba(212, 165, 116, 0.15);
          min-width: 80px;
        }

        .stat-pill-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--accent-gold);
          font-family: 'Crimson Text', serif;
          line-height: 1;
        }

        .stat-pill-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Motivation Section */
        .motivation-section {
          margin-bottom: var(--spacing-2xl);
        }

        .motivation-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--spacing-lg);
        }

        /* Learning Path */
        .learning-path {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
        }

        .unit-chapter {
          background: var(--bg-paper);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          box-shadow: var(--shadow-page);
          border: var(--border-book);
          position: relative;
        }

        .unit-chapter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--gradient-sage);
          border-radius: var(--radius-xl) 0 0 var(--radius-xl);
        }

        .unit-header-section {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
          padding-bottom: var(--spacing-lg);
          border-bottom: 2px solid rgba(139, 115, 85, 0.1);
        }

        .unit-number {
          font-size: 0.9rem;
          font-weight: 800;
          color: white;
          background: var(--gradient-sage);
          padding: 8px 16px;
          border-radius: var(--radius-md);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-page);
        }

        .unit-info {
          flex: 1;
        }

        .unit-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
          font-family: 'Crimson Text', serif;
        }

        .unit-description {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .chapters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--spacing-lg);
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .progress-content-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-lg);
          }
          
          .stats-pills {
            width: 100%;
            justify-content: space-between;
          }
          
          .stat-pill {
            flex: 1;
          }

          .motivation-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .dashboard-container {
            padding: var(--spacing-md) var(--spacing-sm);
          }

          .greeting {
            font-size: 1.85rem;
          }

          .chapters-grid {
            grid-template-columns: 1fr;
          }

          .unit-header-section {
            flex-direction: column;
          }

          .unit-chapter {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
}
