import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { curriculum } from '../data/curriculum';
import { Trophy, Lock, Star, Award, Flame, BookOpen, Target, Zap, Crown, Medal } from 'lucide-react';

export default function Achievements() {
  const { progress, isLessonCompleted } = useProgress();

  // Calculate completed chapters (units where ALL lessons are done)
  const getCompletedChaptersCount = () => {
    return curriculum.units.filter(unit => {
      return unit.lessons.every(lesson => isLessonCompleted(lesson.id));
    }).length;
  };

  const completedChaptersCount = getCompletedChaptersCount();

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
      currentValue: completedChaptersCount,
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
      currentValue: completedChaptersCount,
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
      currentValue: completedChaptersCount,
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

  // Get recently unlocked achievements (last 3)
  const recentlyUnlocked = enrichedAchievements
    .filter(a => a.isUnlocked)
    .slice(-3)
    .reverse();

  // Circular progress component
  const CircularProgress = ({ progress, tier }) => {
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (progress / 100) * circumference;
    
    return (
      <svg className="circular-progress" width="100" height="100">
        <circle
          className="progress-ring-bg"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="6"
        />
        <circle
          className="progress-ring-fill"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={getTierColor(tier)}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="55" textAnchor="middle" className="progress-percentage">
          {progress}%
        </text>
      </svg>
    );
  };

  return (
    <div className="achievements-page animate-fade-in">
      <header className="achievements-header">
        <div className="header-content">
          <Trophy size={48} className="trophy-icon" />
          <div>
            <h1 className="achievements-title">Achievements 🏆</h1>
            <p className="achievements-subtitle">Unlock impressive milestones on your learning journey</p>
          </div>
        </div>
      </header>

      {/* Stats Overview with Animated Counters */}
      <section className="stats-overview">
        <div className="stat-card stat-card-1">
          <div className="stat-icon stat-icon-achievements">
            <Award size={32} />
          </div>
          <div className="stat-info">
            <div className="stat-value animated-counter">{unlockedCount}</div>
            <div className="stat-label">Achievements Unlocked</div>
          </div>
          <div className="stat-particles"></div>
        </div>
        <div className="stat-card stat-card-2">
          <div className="stat-icon stat-icon-xp">
            <Star size={32} />
          </div>
          <div className="stat-info">
            <div className="stat-value animated-counter">{progress.xp || 0}</div>
            <div className="stat-label">Total XP Earned</div>
          </div>
          <div className="stat-particles"></div>
        </div>
        <div className="stat-card stat-card-3">
          <div className="stat-icon stat-icon-streak">
            <Flame size={32} />
          </div>
          <div className="stat-info">
            <div className="stat-value animated-counter">{progress.streak || 0}</div>
            <div className="stat-label">Day Streak</div>
          </div>
          <div className="flame-effect"></div>
        </div>
      </section>

      {/* Recent Achievements */}
      {recentlyUnlocked.length > 0 && (
        <section className="recent-achievements-section">
          <h2 className="section-header">
            <span className="section-icon">🎉</span>
            Recently Unlocked
          </h2>
          <div className="recent-achievements-grid">
            {recentlyUnlocked.map(achievement => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className={`recent-achievement tier-${achievement.tier}`}>
                  <div className="recent-icon-wrapper">
                    <div className={`recent-icon tier-${achievement.tier}`}>
                      <Icon size={28} />
                    </div>
                    <div className="confetti-burst">🎊</div>
                  </div>
                  <div className="recent-info">
                    <h4 className="recent-title">{achievement.title}</h4>
                    <p className="recent-tier">{achievement.tier.toUpperCase()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Achievement Categories */}
      {categories.map(category => (
        <section key={category} className="category-section">
          <h2 className="category-title">
            <span className="category-icon">
              {category === 'Learning Milestones' && '📚'}
              {category === 'Experience Points' && '⚡'}
              {category === 'Daily Streaks' && '🔥'}
              {category === 'Lesson Master' && '🎓'}
            </span>
            {category}
          </h2>
          <div className="achievements-grid">
            {enrichedAchievements
              .filter(ach => ach.category === category)
              .map(achievement => {
                const Icon = achievement.icon;
                const isNearCompletion = !achievement.isUnlocked && achievement.progress >= 75;
                
                return (
                  <div
                    key={achievement.id}
                    className={`achievement-card ${achievement.isUnlocked ? 'unlocked' : 'locked'} tier-${achievement.tier} ${isNearCompletion ? 'near-completion' : ''}`}
                  >
                    {/* Tier Badge */}
                    <div className={`tier-badge tier-badge-${achievement.tier}`}>
                      {achievement.tier.charAt(0).toUpperCase() + achievement.tier.slice(1)}
                    </div>

                    <div className="achievement-icon-wrapper">
                      {achievement.isUnlocked ? (
                        <>
                          <div className={`achievement-icon unlocked`}>
                            <Icon size={48} />
                          </div>
                          <div className="sparkle sparkle-1">✨</div>
                          <div className="sparkle sparkle-2">✨</div>
                          {(achievement.tier === 'gold' || achievement.tier === 'platinum') && (
                            <>
                              <div className="particle particle-1">⭐</div>
                              <div className="particle particle-2">⭐</div>
                              <div className="particle particle-3">✨</div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="circular-progress-wrapper">
                          <CircularProgress progress={achievement.progress} tier={achievement.tier} />
                          <div className="lock-icon-center">
                            <Lock size={32} />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="achievement-info">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <p className="achievement-description">{achievement.description}</p>
                      
                      {!achievement.isUnlocked && (
                        <div className="achievement-progress">
                          <div className="progress-text">
                            <span className="progress-current">{achievement.currentValue}</span>
                            <span className="progress-separator">/</span>
                            <span className="progress-total">{achievement.requirement} {achievement.unit}</span>
                          </div>
                        </div>
                      )}

                      {achievement.isUnlocked && (
                        <div className="achievement-badge achievement-badge-unlocked">
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

        /* Header */
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
          filter: drop-shadow(0 0 10px rgba(255,215,0,0.5));
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

        /* Stats Overview with Enhanced Effects */
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
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        [data-theme="dark"] .stat-card {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        .stat-card-1:hover { border-color: rgba(255,215,0,0.5); }
        .stat-card-2:hover { border-color: rgba(59,130,246,0.5); }
        .stat-card-3:hover { border-color: rgba(239,68,68,0.5); }

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
          position: relative;
          z-index: 2;
        }

        .stat-icon-achievements { background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); }
        .stat-icon-xp { background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%); }
        .stat-icon-streak { 
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%); 
          animation: fire-pulse 1.5s ease-in-out infinite;
        }

        @keyframes fire-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }

        .stat-info {
          flex: 1;
          z-index: 2;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          line-height: 1;
        }

        .animated-counter {
          animation: count-up 0.8s ease-out;
        }

        @keyframes count-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: var(--spacing-xs);
        }

        /* Particle Effects */
        .stat-particles, .flame-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .stat-card:hover .stat-particles::after {
          content: '✨';
          position: absolute;
          top: 20%;
          right: 10%;
          animation: float-particle 2s ease-out infinite;
          font-size: 1.5rem;
        }

        @keyframes float-particle {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-30px); }
        }

        /* Recent Achievements Section */
        .recent-achievements-section {
          margin-bottom: var(--spacing-2xl);
          background: linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.1));
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          border: 2px solid rgba(255,215,0,0.3);
        }

        [data-theme="dark"] .recent-achievements-section {
          background: linear-gradient(135deg, rgba(255,215,0,0.05), rgba(255,165,0,0.05));
        }

        .section-header {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .section-icon {
          font-size: 2rem;
          animation: bounce 1s ease infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .recent-achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: var(--spacing-md);
        }

        .recent-achievement {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          padding: var(--spacing-md);
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          transition: all 0.3s;
          border: 2px solid rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
        }

        [data-theme="dark"] .recent-achievement {
          border-color: rgba(255,255,255,0.1);
        }

        .recent-achievement:hover {
          transform: translateX(8px);
          box-shadow: var(--shadow-lg);
        }

        .recent-achievement.tier-gold {
          border-color: rgba(255,215,0,0.5);
        }

        .recent-achievement.tier-platinum {
          border-color: rgba(229,228,226,0.5);
        }

        .recent-icon-wrapper {
          position: relative;
        }

        .recent-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .recent-icon.tier-bronze { background: linear-gradient(135deg, #CD7F32, #B87333); }
        .recent-icon.tier-silver { background: linear-gradient(135deg, #C0C0C0, #A8A8A8); }
        .recent-icon.tier-gold { background: linear-gradient(135deg, #FFD700, #FFA500); }
        .recent-icon.tier-platinum { background: linear-gradient(135deg, #E5E4E2, #C9C9C9); color: #333; }

        .confetti-burst {
          position: absolute;
          top: -5px;
          right: -5px;
          font-size: 1.2rem;
          animation: confetti-pop 2s ease-in-out infinite;
        }

        @keyframes confetti-pop {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }

        .recent-title {
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .recent-tier {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        /* Category Section */
        .category-section {
          margin-bottom: var(--spacing-2xl);
        }

        .category-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xl);
          font-family: 'Outfit', sans-serif;
          padding-left: var(--spacing-md);
          border-left: 4px solid #2563EB;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .category-icon {
          font-size: 2rem;
        }

        /* Achievements Grid */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }

        /* Achievement Card with 3D Effects */
        .achievement-card {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          border: 2px solid rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        [data-theme="dark"] .achievement-card {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .achievement-card.locked {
          opacity: 0.7;
        }

        .achievement-card.unlocked {
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .achievement-card.unlocked:hover {
          transform: translateY(-12px) rotateX(2deg) rotateY(2deg) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        /* Near Completion Glow */
        .achievement-card.near-completion {
          animation: near-completion-glow 2s ease-in-out infinite;
        }

        @keyframes near-completion-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,0.3); }
          50% { box-shadow: 0 0 40px rgba(59,130,246,0.6); }
        }

        /* Tier-specific Effects */
        .achievement-card.tier-bronze.unlocked:hover {
          border-color: #CD7F32;
        }

        .achievement-card.tier-silver.unlocked:hover {
          border-color: #C0C0C0;
        }

        .achievement-card.tier-gold.unlocked {
          border-color: #FFD700;
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        }

        .achievement-card.tier-gold.unlocked:hover {
          box-shadow: 0 0 50px rgba(255, 215, 0, 0.5);
        }

        .achievement-card.tier-platinum.unlocked {
          border-color: #E5E4E2;
          box-shadow: 0 0 30px rgba(229, 228, 226, 0.4);
        }

        .achievement-card.tier-platinum.unlocked:hover {
          box-shadow: 0 0 50px rgba(229, 228, 226, 0.6);
        }

        /* Tier Badge */
        .tier-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 10;
        }

        .tier-badge-bronze {
          background: linear-gradient(135deg, #CD7F32, #B87333);
          color: white;
          box-shadow: 0 2px 8px rgba(205,127,50,0.3);
        }

        .tier-badge-silver {
          background: linear-gradient(135deg, #C0C0C0, #A8A8A8);
          color: white;
          box-shadow: 0 2px 8px rgba(192,192,192,0.3);
        }

        .tier-badge-gold {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #333;
          box-shadow: 0 2px 8px rgba(255,215,0,0.4);
        }

        .tier-badge-platinum {
          background: linear-gradient(135deg, #E5E4E2, #C9C9C9);
          color: #333;
          box-shadow: 0 2px 8px rgba(229,228,226,0.4);
        }

        /* Achievement Icon Wrapper */
        .achievement-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: var(--spacing-lg);
          position: relative;
          min-height: 120px;
        }

        .achievement-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s;
          position: relative;
        }

        .achievement-icon.unlocked {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { filter: brightness(1); transform: scale(1); }
          50% { filter: brightness(1.15); transform: scale(1.05); }
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

        /* Circular Progress */
        .circular-progress-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circular-progress {
          transform: rotate(-90deg);
        }

        .progress-ring-fill {
          transition: stroke-dashoffset 0.5s ease;
        }

        .progress-percentage {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          fill: var(--text-primary);
          transform: rotate(90deg);
          transform-origin: center;
        }

        .lock-icon-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--text-muted);
          opacity: 0.6;
        }

        /* Sparkles and Particles */
        .sparkle {
          position: absolute;
          font-size: 1.5rem;
          pointer-events: none;
        }

        .sparkle-1 {
          top: -10px;
          right: -10px;
          animation: sparkle-rotate 3s ease-in-out infinite;
        }

        .sparkle-2 {
          bottom: -10px;
          left: -10px;
          animation: sparkle-rotate 3s ease-in-out infinite 1.5s;
        }

        @keyframes sparkle-rotate {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }

        .particle {
          position: absolute;
          font-size: 1.2rem;
          pointer-events: none;
          animation: particle-float 4s ease-in-out infinite;
        }

        .particle-1 {
          top: 10%;
          right: 5%;
          animation-delay: 0s;
        }

        .particle-2 {
          bottom: 15%;
          left: 10%;
          animation-delay: 1.3s;
        }

        .particle-3 {
          top: 50%;
          right: 8%;
          animation-delay: 2.6s;
        }

        @keyframes particle-float {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(0) scale(0.5); 
          }
          10%, 90% {
            opacity: 0.8;
          }
          50% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1); 
          }
        }

        /* Achievement Info */
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
          line-height: 1.5;
        }

        .achievement-progress {
          margin-top: var(--spacing-md);
        }

        .progress-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .progress-current {
          color: var(--text-primary);
          font-weight: 800;
          font-size: 1.1rem;
        }

        .progress-separator {
          margin: 0 4px;
          color: var(--text-muted);
        }

        .progress-total {
          color: var(--text-muted);
        }

        /* Achievement Badge */
        .achievement-badge-unlocked {
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
          animation: badge-appear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes badge-appear {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Responsive Design */
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

          .recent-achievements-grid {
            grid-template-columns: 1fr;
          }

          .achievement-card.unlocked:hover {
            transform: translateY(-8px) scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}
