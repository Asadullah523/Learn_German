import React from 'react';
import { motion } from 'framer-motion';
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
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-slate-200 dark:text-slate-700"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={getTierColor(tier)}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <text 
          x="50" 
          y="50" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          className="text-xs font-bold fill-slate-500 dark:fill-slate-400 transform rotate-90"
        >
          {progress}%
        </text>
      </svg>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto pb-24 px-4 md:px-0 space-y-12"
    >
      <header className="text-center py-12 glass-panel">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-yellow-400 drop-shadow-lg"
          >
            <Trophy size={64} />
          </motion.div>
          <div>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-slate-900 dark:text-white mb-2">Achievements 🏆</h1>
            <p className="text-xl text-slate-500 dark:text-slate-400">Unlock impressive milestones on your learning journey</p>
          </div>
        </motion.div>
      </header>

      {/* Stats Overview with Animated Counters */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Award, value: unlockedCount, label: "Achievements Unlocked", color: "from-yellow-400 to-orange-500" },
          { icon: Star, value: progress.xp || 0, label: "Total XP Earned", color: "from-blue-400 to-blue-600" },
          { icon: Flame, value: progress.streak || 0, label: "Day Streak", color: "from-red-500 to-rose-600" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 flex items-center gap-4"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
              <stat.icon size={32} />
            </div>
            <div>
              <div className="font-heading font-black text-4xl text-slate-900 dark:text-white leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Recent Achievements */}
      {recentlyUnlocked.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-8 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10 border-yellow-200 dark:border-yellow-800/30"
        >
          <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            Recently Unlocked
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentlyUnlocked.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div 
                  key={achievement.id} 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 shadow-sm"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-white shadow-md">
                      <Icon size={24} />
                    </div>
                    <div className="absolute -top-1 -right-1 text-lg animate-bounce">🎊</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{achievement.title}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{achievement.tier}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* Achievement Categories */}
      {categories.map((category, categoryIndex) => (
        <section key={category}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-3 pl-4 border-l-4 border-primary"
          >
            <span>
              {category === 'Learning Milestones' && '📚'}
              {category === 'Experience Points' && '⚡'}
              {category === 'Daily Streaks' && '🔥'}
              {category === 'Lesson Master' && '🎓'}
            </span>
            {category}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichedAchievements
              .filter(ach => ach.category === category)
              .map((achievement, index) => {
                const Icon = achievement.icon;
                const isNearCompletion = !achievement.isUnlocked && achievement.progress >= 75;
                
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    className={`
                      relative overflow-hidden rounded-2xl p-6 border transition-all duration-300
                      ${achievement.isUnlocked 
                        ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg' 
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-80'
                      }
                      ${isNearCompletion ? 'ring-2 ring-blue-400/50 shadow-blue-500/20' : ''}
                    `}
                  >
                    {/* Tier Badge */}
                    <div className={`
                      absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest
                      ${achievement.tier === 'bronze' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : ''}
                      ${achievement.tier === 'silver' ? 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300' : ''}
                      ${achievement.tier === 'gold' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
                      ${achievement.tier === 'platinum' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : ''}
                    `}>
                      {achievement.tier}
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="relative">
                        {achievement.isUnlocked ? (
                          <div className={`
                            w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl
                            ${achievement.tier === 'bronze' ? 'bg-gradient-to-br from-orange-400 to-orange-600' : ''}
                            ${achievement.tier === 'silver' ? 'bg-gradient-to-br from-slate-300 to-slate-500' : ''}
                            ${achievement.tier === 'gold' ? 'bg-gradient-to-br from-yellow-300 to-yellow-500' : ''}
                            ${achievement.tier === 'platinum' ? 'bg-gradient-to-br from-slate-100 to-slate-400 border-2 border-slate-300' : ''}
                          `}>
                            <Icon size={40} />
                          </div>
                        ) : (
                          <div className="relative">
                            <CircularProgress progress={achievement.progress} tier={achievement.tier} />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
                              <Lock size={24} />
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className={`font-heading font-bold text-lg mb-1 ${achievement.isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                      
                      {!achievement.isUnlocked && (
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mt-2 overflow-hidden">
                          <div 
                            className="h-full bg-slate-300 dark:bg-slate-600 rounded-full" 
                            style={{ width: `${achievement.progress}%` }}
                          />
                        </div>
                      )}

                      {achievement.isUnlocked && (
                        <div className="flex items-center gap-1 text-green-500 font-bold text-xs uppercase tracking-wider mt-2">
                          <Trophy size={14} />
                          <span>Unlocked</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </section>
      ))}
    </motion.div>
  );
}
