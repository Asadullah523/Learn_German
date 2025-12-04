import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, Lock, BookOpen, MessageCircle, PenTool, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LessonCard({ lesson, unitId, isCompleted, isLocked }) {
  
  const getIcon = (type) => {
    switch(type) {
      case 'quiz': return <PenTool size={20} />;
      case 'dialogue': return <MessageCircle size={20} />;
      default: return <BookOpen size={20} />;
    }
  };

  if (isLocked) {
    return (
      <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 opacity-60 cursor-not-allowed">
        <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <Lock size={20} />
        </div>
        <div className="flex-1">
          <h4 className="font-heading font-semibold text-slate-500 dark:text-slate-400">{lesson.title}</h4>
          <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
            <span>{lesson.type}</span>
            <span>+{lesson.xp} XP</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/learn/${unitId}/${lesson.id}`} className="block group">
      <motion.div 
        whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.8)" }}
        className={`
          flex items-center gap-4 p-4 rounded-xl border transition-all duration-200
          ${isCompleted 
            ? 'bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-900/30' 
            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-md'
          }
        `}
      >
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200
          ${isCompleted 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
            : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40'
          }
        `}>
          {isCompleted ? <CheckCircle size={20} /> : getIcon(lesson.type)}
        </div>
        
        <div className="flex-1">
          <h4 className={`font-heading font-semibold ${isCompleted ? 'text-green-900 dark:text-green-100' : 'text-slate-900 dark:text-slate-100'}`}>
            {lesson.title}
          </h4>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mt-1">
            <span className={isCompleted ? 'text-green-600 dark:text-green-400' : 'text-slate-500 dark:text-slate-400'}>
              {lesson.type}
            </span>
            <span className={isCompleted ? 'text-green-600 dark:text-green-400' : 'text-slate-500 dark:text-slate-400'}>
              +{lesson.xp} XP
            </span>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {isCompleted ? (
             <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold flex items-center gap-1">
               <Star size={12} fill="currentColor" /> Done
             </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold">
              Start
            </span>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
