import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function DailyProgress() {
  const { progress, getTodayXP, getWeeklyActivity } = useProgress();
  const weeklyData = getWeeklyActivity();
  const todayXP = getTodayXP();
  const dailyGoal = 100; // XP goal per day

  return (
    <div className="glass-panel p-6 h-full flex flex-col gap-6">
      {/* Streak Counter */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800/30 p-6">
        <div className="relative z-10 flex items-center gap-4">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl filter drop-shadow-md"
            >
              🔥
            </motion.div>
          </div>
          <div>
            <div className="font-heading font-black text-3xl bg-gradient-gold bg-clip-text text-transparent leading-none">
              {progress.streak}
            </div>
            <div className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mt-1">
              Day Streak
            </div>
          </div>
        </div>
        
        <div className="relative z-10 mt-3 text-sm font-medium text-amber-800 dark:text-amber-300 italic">
          {progress.streak === 1 && "Start your journey!"}
          {progress.streak > 1 && progress.streak < 7 && "Keep it up!"}
          {progress.streak >= 7 && progress.streak < 30 && "Impressive streak!"}
          {progress.streak >= 30 && "Unstoppable! 🌟"}
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 animate-shine pointer-events-none" />
      </div>

      {/* Today's Progress */}
      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Today's XP</span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
            <span className="text-primary">{todayXP}</span> / {dailyGoal}
          </span>
        </div>
        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((todayXP / dailyGoal) * 100, 100)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-gold rounded-full shadow-lg shadow-amber-500/20"
          />
        </div>
      </div>

      {/* Weekly Heatmap */}
      <div className="mt-auto">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">This Week</div>
        <div className="grid grid-cols-7 gap-2">
          {weeklyData.map((day, index) => {
            const intensity = day.xp > 0 ? Math.min(day.xp / 50, 1) : 0;
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full border border-slate-100 dark:border-slate-700 transition-colors duration-300"
                  style={{ 
                    backgroundColor: intensity > 0 
                      ? `rgba(16, 185, 129, ${0.2 + intensity * 0.8})` 
                      : 'rgba(148, 163, 184, 0.1)'
                  }}
                  title={`${day.dayName}: ${day.xp} XP`}
                />
                <span className="text-[10px] font-bold text-slate-400">{day.dayName.charAt(0)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
