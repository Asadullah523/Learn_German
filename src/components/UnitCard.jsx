import React from 'react';
import { Lock, Play, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UnitCard({ unit, progress, isLocked, onClick }) {
  const { totalLessons, completedLessons } = progress;
  const percentComplete = Math.round((completedLessons / totalLessons) * 100) || 0;
  const isCompleted = percentComplete === 100;

  return (
    <motion.div 
      whileHover={!isLocked ? { y: -5, scale: 1.02 } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      onClick={!isLocked ? onClick : undefined}
      className={`
        relative overflow-hidden rounded-2xl border transition-all duration-300 h-full flex flex-col
        ${isLocked 
          ? 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-75 cursor-not-allowed grayscale' 
          : 'glass-card cursor-pointer border-white/20 dark:border-white/10'
        }
        ${isCompleted ? 'ring-2 ring-green-500/50' : ''}
      `}
    >
      {/* Card Header */}
      <div className={`
        relative p-6 text-white overflow-hidden
        ${isCompleted ? 'bg-gradient-success' : 'bg-gradient-primary'}
      `}>
        <div className="relative z-10 flex justify-between items-start mb-2">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
            Unit {unit.id.replace('ch', '')}
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">
              <Star size={12} fill="currentColor" /> Done
            </span>
          )}
        </div>
        <h3 className="relative z-10 font-heading font-bold text-2xl leading-tight text-white drop-shadow-sm">
          {unit.title.split(':')[1] || unit.title}
        </h3>
        
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-black/10 rounded-full blur-xl"></div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
          {unit.description}
        </p>
        
        <div className="mt-auto space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <span>Progress</span>
            <span>{percentComplete}%</span>
          </div>
          <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percentComplete}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${isCompleted ? 'bg-gradient-success' : 'bg-gradient-primary'}`}
            />
          </div>
          <div className="text-right text-xs text-slate-400 font-medium">
            {completedLessons}/{totalLessons} Lessons
          </div>
        </div>
      </div>

      {/* Hover Action Overlay */}
      {!isLocked && (
        <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play size={24} className="text-primary ml-1" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Locked Overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-[1px] flex items-center justify-center z-20">
          <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-sm flex items-center justify-center text-slate-400">
            <Lock size={20} />
          </div>
        </div>
      )}
    </motion.div>
  );
}
