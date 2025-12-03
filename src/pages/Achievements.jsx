import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { Trophy, Lock, Star, Award, Flame, BookOpen, Target, Zap, Crown, Medal } from 'lucide-react';

export default function Achievements() {
  const { progress } = useProgress();

  // Define achievement tiers
  const achievements = [
    // Learning Milestones
    {
      id: 'first-steps',
      category: 'Learning Milestones',
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: BookOpen,
      requirement: 1,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'bronze',
      unit: 'lessons'
    },
    {
      id: 'rising-star',
      category: 'Learning Milestones',
      title: 'Rising Star',
      description: 'Complete 5 chapters',
      icon: Star,
      requirement: 5,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'bronze',
      unit: 'chapters'
    },
    {
      id: 'dedicated-learner',
      category: 'Learning Milestones',
      title: 'Dedicated Learner',
      description: 'Complete 10 chapters',
      icon: Award,
      requirement: 10,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'silver',
      unit: 'chapters'
    },
    {
      id: 'master-student',
      category: 'Learning Milestones',
      title: 'Master Student',
      description: 'Complete all 15 chapters',
      icon: Crown,
      requirement: 15,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'gold',
      unit: 'chapters'
    },

    // XP Achievements
    {
      id: 'beginner',
      category: 'Experience Points',
      title: 'Beginner',
      description: 'Earn 100 XP',
      icon: Zap,
      requirement: 100,
      currentValue: progress.xp || 0,
      tier: 'bronze',
      unit: 'XP'
    },
    {
      id: 'intermediate',
      category: 'Experience Points',
      title: 'Intermediate',
      description: 'Earn 500 XP',
      icon: Zap,
      requirement: 500,
      currentValue: progress.xp || 0,
      tier: 'silver',
      unit: 'XP'
    },
    {
      id: 'advanced',
      category: 'Experience Points',
      title: 'Advanced',
      description: 'Earn 1000 XP',
      icon: Zap,
      requirement: 1000,
      currentValue: progress.xp || 0,
      tier: 'gold',
      unit: 'XP'
    },
    {
      id: 'expert',
      category: 'Experience Points',
      title: 'Expert',
      description: 'Earn 2500 XP',
      icon: Trophy,
      requirement: 2500,
      currentValue: progress.xp || 0,
      tier: 'platinum',
      unit: 'XP'
    },

    // Streak Achievements
    {
      id: 'consistent',
      category: 'Daily Streaks',
      title: 'Consistent',
      description: 'Maintain a 3 day streak',
      icon: Flame,
      requirement: 3,
      currentValue: progress.streak || 0,
      tier: 'bronze',
      unit: 'days'
    },
    {
      id: 'committed',
      category: 'Daily Streaks',
      title: 'Committed',
      description: 'Maintain a 7 day streak',
      icon: Flame,
      requirement: 7,
      currentValue: progress.streak || 0,
      tier: 'silver',
      unit: 'days'
    },
    {
      id: 'unstoppable',
      category: 'Daily Streaks',
      title: 'Unstoppable',
      description: 'Maintain a 30 day streak',
      icon: Flame,
      requirement: 30,
      currentValue: progress.streak || 0,
      tier: 'gold',
      unit: 'days'
    },

    // Lesson Achievements
    {
      id: 'curious-mind',
      category: 'Lesson Master',
      title: 'Curious Mind',
      description: 'Complete 10 lessons',
      icon: Target,
      requirement: 10,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'bronze',
      unit: 'lessons'
    },
    {
      id: 'knowledge-seeker',
      category: 'Lesson Master',
      title: 'Knowledge Seeker',
      description: 'Complete 25 lessons',
      icon: Medal,
      requirement: 25,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'silver',
      unit: 'lessons'
    },
    {
      id: 'study-master',
      category: 'Lesson Master',
      title: 'Study Master',
      description: 'Complete 50 lessons',
      icon: Award,
      requirement: 50,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'gold',
      unit: 'lessons'
    },
    {
      id: 'scholar',
      category: 'Lesson Master',
      title: 'Scholar',
      description: 'Complete 100 lessons',
      icon: Crown,
      requirement: 100,
      currentValue: progress.completedLessons?.length || 0,
      tier: 'platinum',
      unit: 'lessons'
    }
  ];

  // Calculate unlock status and progress
  const enrichedAchievements = achievements.map(ach => ({
    ...ach,
    isUnlocked: ach.currentValue >= ach.requirement,
    progress: Math.min(100, Math.round((ach.currentValue / ach.requirement) * 100))
  }));

  // Group by category
  const categories = [...new Set(achievements.map(a => a.category))];
  const unlockedCount = enrichedAchievements.filter(a => a.isUnlocked).length;

  // Get tier colors
  const getTierColor = (tier) => {
    switch(tier) {
      case 'bronze': return '#CD7F32';
      case 'silver': return '#C0C0C0';
      case 'gold': return '#FFD700';
      case 'platinum': return '#E5E4E2';
      default: return '#888';
    }
  };

  return (
    <div className="achievements-page animate-fade-in">
      <header className="achievements-header">
        <div className="header-content">
          <Trophy size={48} className="trophy-icon" />
          <div>
            <h1 className="achievements-title">Achievements 🏆</h1>
            <p className="achievements-subtitle">Unlock impressive milestones</p>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="stats-overview">
        <div className="stat-card">
          <div className="stat-icon">
            <Award size={32} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{unlockedCount}</div>
            <div className="stat-label">Achievements Unlocked</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Star size={32} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{progress.xp || 0}</div>
            <div className="stat-label">Total XP Earned</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Flame size={32} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{progress.streak || 0}</div>
            <div className="stat-label">Day Streak</div>
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      {categories.map(category => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="achievements-grid">
            {enrichedAchievements
              .filter(ach => ach.category === category)
              .map(achievement => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className={`achievement-card ${achievement.isUnlocked ? 'unlocked' : 'locked'} tier-${achievement.tier}`}
                  >
                    <div className="achievement-icon-wrapper">
                      <div className={`achievement-icon ${achievement.isUnlocked ? 'unlocked' : ''}`}>
                        {achievement.isUnlocked ? (
                          <Icon size={48} />
                        ) : (
                          <Lock size={48} />
                        )}
                      </div>
                      {achievement.isUnlocked && <div className="sparkle">✨</div>}
                    </div>

                    <div className="achievement-info">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <p className="achievement-description">{achievement.description}</p>
                      
                      {!achievement.isUnlocked && (
                        <div className="achievement-progress">
                          <div className="progress-bar-mini">
                            <div 
                              className="progress-fill-mini" 
                              style={{ 
                                width: `${achievement.progress}%`,
                                background: getTierColor(achievement.tier)
                              }}
                            />
                          </div>
                          <div className="progress-text">
                            {achievement.currentValue} / {achievement.requirement} {achievement.unit}
                          </div>
                        </div>
                      )}

                      {achievement.isUnlocked && (
                        <div className="achievement-badge">
                          <Trophy size={16} />
                          <span>Unlocked!</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      ))}

      <style>{`
        .achievements-page {
          padding: var(--spacing-xl) var(--spacing-md);
          max-width: 1400px;
          margin: 0 auto;
          padding-bottom: 100px;
        }

        .achievements-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          padding: var(--spacing-xl);
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: var(--shadow-md);
        }

        [data-theme="dark"] .achievements-header {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-lg);
        }

        .trophy-icon {
          color: #FFD700;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .achievements-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
          font-family: 'Outfit', sans-serif;
        }

        .achievements-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .stats-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .stat-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          transition: all var(--transition-base);
        }

        [data-theme="dark"] .stat-card {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .stat-info {
          flex: 1;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: var(--spacing-xs);
        }

        .category-section {
          margin-bottom: var(--spacing-2xl);
        }

        .category-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xl);
          font-family: 'Outfit', sans-serif;
          padding-left: var(--spacing-sm);
          border-left: 4px solid var(--gradient-primary);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }

        .achievement-card {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          border: 2px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        [data-theme="dark"] .achievement-card {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .achievement-card.locked {
          opacity: 0.6;
        }

        .achievement-card.unlocked {
          box-shadow: var(--shadow-lg);
        }

        .achievement-card.unlocked:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .achievement-card.tier-gold.unlocked {
          border-color: #FFD700;
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        }

        .achievement-card.tier-platinum.unlocked {
          border-color: #E5E4E2;
          box-shadow: 0 0 30px rgba(229, 228, 226, 0.4);
        }

        .achievement-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: var(--spacing-lg);
          position: relative;
        }

        .achievement-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          position: relative;
        }

        .achievement-icon.unlocked {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .tier-bronze .achievement-icon.unlocked {
          background: linear-gradient(135deg, #CD7F32, #B87333);
          color: white;
          box-shadow: 0 0 30px rgba(205, 127, 50, 0.5);
        }

        .tier-silver .achievement-icon.unlocked {
          background: linear-gradient(135deg, #C0C0C0, #A8A8A8);
          color: white;
          box-shadow: 0 0 30px rgba(192, 192, 192, 0.5);
        }

        .tier-gold .achievement-icon.unlocked {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: white;
          box-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
        }

        .tier-platinum .achievement-icon.unlocked {
          background: linear-gradient(135deg, #E5E4E2, #C9C9C9);
          color: #333;
          box-shadow: 0 0 40px rgba(229, 228, 226, 0.7);
        }

        .achievement-icon:not(.unlocked) {
          background: rgba(0, 0, 0, 0.1);
          color: var(--text-muted);
          border: 2px dashed rgba(0, 0, 0, 0.2);
        }

        [data-theme="dark"] .achievement-icon:not(.unlocked) {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .sparkle {
          position: absolute;
          top: -5px;
          right: -5px;
          font-size: 1.5rem;
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        @keyframes glow-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .achievement-info {
          text-align: center;
        }

        .achievement-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
          font-family: 'Outfit', sans-serif;
        }

        .achievement-description {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: var(--spacing-md);
        }

        .achievement-progress {
          margin-top: var(--spacing-md);
        }

        .progress-bar-mini {
          height: 8px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: var(--spacing-xs);
        }

        [data-theme="dark"] .progress-bar-mini {
          background: rgba(255, 255, 255, 0.1);
        }

        .progress-fill-mini {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 0.5s ease-out;
        }

        .progress-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .achievement-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: var(--spacing-xs) var(--spacing-md);
          background: var(--gradient-success);
          color: white;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: var(--spacing-md);
        }

        @media (max-width: 768px) {
          .achievements-page {
            padding: var(--spacing-md) var(--spacing-sm);
          }

          .achievements-title {
            font-size: 2rem;
          }

          .header-content {
            flex-direction: column;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .stats-overview {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
