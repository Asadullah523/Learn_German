import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { curriculum } from '../data/curriculum';
import DailyProgress from '../components/DailyProgress';
import MotivationalQuote from '../components/MotivationalQuote';
import UnitCard from '../components/UnitCard';
import LessonCard from '../components/LessonCard';
import { X } from 'lucide-react';

export default function Dashboard() {
  const { progress, isLessonCompleted } = useProgress();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Sync state with URL params
  useEffect(() => {
    const unitId = searchParams.get('unit');
    if (unitId) {
      const unit = curriculum.units.find(u => u.id === unitId);
      if (unit) setSelectedUnit(unit);
    } else {
      setSelectedUnit(null);
    }
  }, [searchParams]);

  const handleUnitClick = (unit) => {
    setSearchParams({ unit: unit.id });
  };

  const closeUnitModal = () => {
    setSearchParams({});
  };

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

  const getUnitProgress = (unit) => {
    const unitLessons = unit.lessons;
    const completedUnitLessons = unitLessons.filter(l => isLessonCompleted(l.id)).length;
    return {
      totalLessons: unitLessons.length,
      completedLessons: completedUnitLessons
    };
  };

  const isUnitLocked = (index) => {
    if (index === 0) return false;
    const prevUnit = curriculum.units[index - 1];
    const prevUnitProgress = getUnitProgress(prevUnit);
    return prevUnitProgress.completedLessons < prevUnitProgress.totalLessons;
  };

  return (
    <div className="dashboard-container animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="greeting-box">
          <h1 className="greeting">
            <span className="greeting-text">{greeting}</span>
            <span className="greeting-wave">👋</span>
          </h1>
          <p className="hero-subtitle">Ready to continue your German journey?</p>
        </div>
        
        <div className="overall-stats-bar glass-card">
          <div className="stat-item">
            <span className="stat-value text-gradient">{progressPercentage}%</span>
            <span className="stat-label">Total Progress</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">{completedCount}</span>
            <span className="stat-label">Lessons Done</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">{progress.xp}</span>
            <span className="stat-label">Total XP</span>
          </div>
        </div>
      </section>

      {/* Motivation Grid */}
      <section className="motivation-section">
        <div className="motivation-grid">
          <DailyProgress />
          <MotivationalQuote />
        </div>
      </section>

      {/* Units Grid */}
      <section className="units-section">
        <h2 className="section-title">Your Learning Path</h2>
        <div className="units-grid">
          {curriculum.units.map((unit, index) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              progress={getUnitProgress(unit)}
              isLocked={isUnitLocked(index)}
              onClick={() => handleUnitClick(unit)}
            />
          ))}
        </div>
      </section>

      {/* Expanded Unit View (Modal/Overlay) */}
      {selectedUnit && (
        <div className="unit-modal-overlay" onClick={closeUnitModal}>
          <div className="unit-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeUnitModal}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <span className="modal-subtitle">Unit {selectedUnit.id.replace('ch', '')}</span>
              <h2 className="modal-title">{selectedUnit.title.split(':')[1] || selectedUnit.title}</h2>
              <p className="modal-description">{selectedUnit.description}</p>
            </div>

            <div className="lessons-list">
              {selectedUnit.lessons.map((lesson, index) => {
                const isLocked = index > 0 && !isLessonCompleted(selectedUnit.lessons[index - 1].id);
                
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    unitId={selectedUnit.id}
                    isCompleted={isLessonCompleted(lesson.id)}
                    isLocked={isLocked}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .dashboard-container {
          padding: var(--spacing-xl) var(--spacing-md);
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 100px;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          position: relative;
        }

        .greeting {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
          letter-spacing: -0.03em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .greeting-text {
          background: var(--gradient-dark);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme="dark"] .greeting-text {
          background: linear-gradient(to right, #fff, #ccc);
          -webkit-background-clip: text;
        }

        .greeting-wave {
          display: inline-block;
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xl);
          font-weight: 500;
        }

        .overall-stats-bar {
          display: inline-flex;
          align-items: center;
          padding: var(--spacing-lg) var(--spacing-2xl);
          gap: var(--spacing-2xl);
          background: white; /* Solid white */
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-xl);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          font-family: 'Outfit', sans-serif;
        }

        .text-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 700;
          margin-top: 8px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--text-muted);
          opacity: 0.2;
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

        /* Units Section */
        .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
          font-weight: 700;
        }

        .units-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }

        /* Modal / Expanded View */
        .unit-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9); /* Light solid overlay */
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-md);
          animation: fadeIn 0.2s ease-out;
        }

        .unit-modal {
          background: var(--bg-card);
          width: 100%;
          max-width: 600px;
          max-height: 85vh;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          position: relative;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.1);
        }

        .close-modal-btn {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          background: rgba(0,0,0,0.05);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.2s;
          z-index: 10;
        }

        .close-modal-btn:hover {
          background: rgba(0,0,0,0.1);
          color: var(--text-primary);
          transform: rotate(90deg);
        }

        .modal-header {
          padding: var(--spacing-xl);
          background: var(--bg-primary);
          border-bottom: 1px solid rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        .modal-subtitle {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 800;
          display: block;
          margin-bottom: var(--spacing-xs);
        }

        .modal-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
          line-height: 1.1;
          padding-right: var(--spacing-xl);
        }

        .modal-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .lessons-list {
          padding: var(--spacing-lg);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          background: var(--bg-secondary); /* Light grey background for contrast with white cards */
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 768px) {
          .motivation-grid {
            grid-template-columns: 1fr;
          }
          
          .overall-stats-bar {
            width: 100%;
            justify-content: space-between;
            padding: var(--spacing-lg);
            gap: var(--spacing-sm);
            flex-direction: row;
          }
          
          .stat-label {
            font-size: 0.65rem;
          }
          
          .greeting {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
