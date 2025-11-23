import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { curriculum } from '../data/curriculum';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, Lock } from 'lucide-react';

export default function Dashboard() {
  const { progress, isLessonCompleted } = useProgress();

  // Calculate overall progress
  const totalLessons = curriculum.units.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const completedCount = progress.completedLessons.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="dashboard animate-fade-in">
      <header className="dashboard-header">
        <div>
          <h1 className="text-2xl font-bold">German A1: From Zero to Hero</h1>
          <p className="text-muted">By Asad Ullah — Author & Creator</p>
        </div>
        <div className="progress-card card">
          <div className="progress-info">
            <span className="text-sm font-bold">Course Progress</span>
            <span className="text-sm text-muted">{progressPercentage}%</span>
          </div>
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </header>

      <div className="units-container">
        {curriculum.units.map((unit, index) => (
          <div key={unit.id} className="unit-section animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="unit-header">
              <h2 className="text-xl font-bold">{unit.title}</h2>
              <p className="text-muted">{unit.description}</p>
            </div>
            
            <div className="lessons-grid">
              {unit.lessons.map((lesson) => {
                const isCompleted = isLessonCompleted(lesson.id);
                // Simple logic: unlock if previous lesson is completed or it's the first one
                // For now, everything is unlocked for demo purposes, or we can implement strict locking
                const isLocked = false; 

                return (
                  <Link 
                    to={`/learn/${unit.id}/${lesson.id}`} 
                    key={lesson.id}
                    className={`lesson-card card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
                  >
                    <div className="lesson-icon">
                      {isCompleted ? <CheckCircle size={24} /> : isLocked ? <Lock size={24} /> : <Play size={24} />}
                    </div>
                    <div className="lesson-info">
                      <h3 className="font-bold">{lesson.title}</h3>
                      <span className="xp-badge">{lesson.xp} XP</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }

        .progress-card {
          min-width: 250px;
          padding: var(--spacing-md);
        }

        .progress-bar-bg {
          height: 8px;
          background: var(--border);
          border-radius: var(--radius-full);
          margin-top: var(--spacing-sm);
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--secondary);
          border-radius: var(--radius-full);
          transition: width 0.5s ease;
        }

        .units-container {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .unit-header {
          margin-bottom: var(--spacing-md);
        }

        .lessons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--spacing-md);
        }

        .lesson-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          text-decoration: none;
          color: inherit;
          border-left: 4px solid transparent;
        }

        .lesson-card:hover {
          border-left-color: var(--primary);
        }

        .lesson-card.completed {
          border-left-color: var(--secondary);
          background: linear-gradient(to right, rgba(16, 185, 129, 0.05), var(--surface));
        }

        .lesson-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--background);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .lesson-card.completed .lesson-icon {
          background: var(--secondary);
          color: white;
        }

        .xp-badge {
          font-size: 0.75rem;
          background: var(--accent);
          color: white;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
