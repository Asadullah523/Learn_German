import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../context/ProgressContext';
import { curriculum } from '../data/curriculum';
import DailyProgress from '../components/DailyProgress';
import MotivationalQuote from '../components/MotivationalQuote';
import UnitCard from '../components/UnitCard';
import LessonCard from '../components/LessonCard';
import { X } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

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
  if (hour >= 0 && hour < 5) greeting = 'Burning the Midnight Oil? 🌙';
  else if (hour >= 5 && hour < 12) greeting = 'Good Morning';
  else if (hour >= 12 && hour < 17) greeting = 'Good Afternoon';
  else if (hour >= 17 && hour < 22) greeting = 'Good Evening';
  else greeting = 'Good Night';

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
    <div className="max-w-7xl mx-auto pb-24 space-y-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center py-12"
      >
        <div className="mb-8">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="font-heading font-extrabold text-4xl md:text-6xl mb-4 flex flex-col md:flex-row items-center justify-center gap-4 text-slate-900 dark:text-white"
          >
            <span className="bg-gradient-dark dark:bg-gradient-to-r dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              {greeting}
            </span>
            <motion.span 
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-500 dark:text-slate-400 font-medium"
          >
            Ready to continue your German journey?
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02 }}
          className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
        >
          <div className="flex flex-col items-center">
            <span className="font-heading font-black text-4xl bg-gradient-primary bg-clip-text text-transparent">
              {progressPercentage}%
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">Total Progress</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
          <div className="flex flex-col items-center">
            <span className="font-heading font-black text-4xl text-slate-800 dark:text-white">
              {completedCount}
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">Lessons Done</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
          <div className="flex flex-col items-center">
            <span className="font-heading font-black text-4xl text-slate-800 dark:text-white">
              {progress.xp}
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">Total XP</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Motivation Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-5 gap-6"
      >
        <div className="md:col-span-3 h-full">
          <DailyProgress />
        </div>
        <div className="md:col-span-2 h-full">
          <MotivationalQuote />
        </div>
      </motion.section>

      {/* Units Grid */}
      <section>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="font-heading font-bold text-3xl text-slate-900 dark:text-white mb-8"
        >
          Your Learning Path
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {curriculum.units.map((unit, index) => (
            <motion.div key={unit.id} variants={item} className="h-full">
              <UnitCard
                unit={unit}
                progress={getUnitProgress(unit)}
                isLocked={isUnitLocked(index)}
                onClick={() => handleUnitClick(unit)}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Expanded Unit View (Modal/Overlay) */}
      <AnimatePresence>
        {selectedUnit && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
            onClick={closeUnitModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl max-h-[85vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col" 
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-white/20 hover:text-slate-900 dark:hover:text-white transition-colors z-10" 
                onClick={closeUnitModal}
              >
                <X size={24} />
              </button>
              
              <div className="p-8 border-b border-slate-100 dark:border-white/10 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-white/5 dark:to-transparent">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white/60 mb-2 block">
                  Unit {selectedUnit.id.replace('ch', '')}
                </span>
                <h2 className="font-heading font-bold text-3xl text-slate-900 dark:text-white mb-2 leading-tight pr-8">
                  {selectedUnit.title.split(':')[1] || selectedUnit.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-white/80 leading-relaxed">
                  {selectedUnit.description}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {selectedUnit.lessons.map((lesson, index) => {
                  const isLocked = index > 0 && !isLessonCompleted(selectedUnit.lessons[index - 1].id);
                  
                  return (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <LessonCard
                        lesson={lesson}
                        unitId={selectedUnit.id}
                        isCompleted={isLessonCompleted(lesson.id)}
                        isLocked={isLocked}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
