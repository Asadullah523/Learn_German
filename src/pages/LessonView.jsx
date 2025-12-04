import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useProgress } from '../context/ProgressContext';
import Quiz from '../components/Quiz';
import { ArrowLeft, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { curriculum } from '../data/curriculum';

export default function LessonView() {
  const { unitId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, isLessonCompleted, setLastLesson } = useProgress();
  const [lesson, setLesson] = useState(null);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!curriculum || !curriculum.units) {
    console.error("Curriculum data is missing or invalid");
    return <div className="p-8 text-red-500">Error: Curriculum data not loaded. Please check console.</div>;
  }

  // Helper function to format text with bold
  const formatTextWithBold = (text) => {
    if (!text) return text;
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  };

  // Get next lesson (across chapters if needed)
  const getNextLesson = () => {
    const units = curriculum.units;
    const currentUnitIndex = units.findIndex(u => u.id === unitId);
    if (currentUnitIndex === -1) return null;
    
    const currentUnit = units[currentUnitIndex];
    const currentLessonIndex = currentUnit.lessons.findIndex(l => l.id === lessonId);
    
    // Try next lesson in same chapter first
    if (currentLessonIndex < currentUnit.lessons.length - 1) {
      return {
        unitId: unitId,
        lessonId: currentUnit.lessons[currentLessonIndex + 1].id,
        lesson: currentUnit.lessons[currentLessonIndex + 1]
      };
    }
    
    // Try first lesson of next chapter
    if (currentUnitIndex < units.length - 1) {
      const nextUnit = units[currentUnitIndex + 1];
      if (nextUnit.lessons.length > 0) {
        return {
          unitId: nextUnit.id,
          lessonId: nextUnit.lessons[0].id,
          lesson: nextUnit.lessons[0]
        };
      }
    }
    
    return null;
  };

  // Get previous lesson (across chapters if needed)
  const getPreviousLesson = () => {
    const units = curriculum.units;
    const currentUnitIndex = units.findIndex(u => u.id === unitId);
    if (currentUnitIndex === -1) return null;
    
    const currentUnit = units[currentUnitIndex];
    const currentLessonIndex = currentUnit.lessons.findIndex(l => l.id === lessonId);
    
    // Try previous lesson in same chapter first
    if (currentLessonIndex > 0) {
      return {
        unitId: unitId,
        lessonId: currentUnit.lessons[currentLessonIndex - 1].id,
        lesson: currentUnit.lessons[currentLessonIndex - 1]
      };
    }
    
    // Try last lesson of previous chapter
    if (currentUnitIndex > 0) {
      const prevUnit = units[currentUnitIndex - 1];
      if (prevUnit.lessons.length > 0) {
        const lastLesson = prevUnit.lessons[prevUnit.lessons.length - 1];
        return {
          unitId: prevUnit.id,
          lessonId: lastLesson.id,
          lesson: lastLesson
        };
      }
    }
    
    return null;
  };

  useEffect(() => {
    const unit = curriculum.units.find(u => u.id === unitId);
    if (unit) {
      const foundLesson = unit.lessons.find(l => l.id === lessonId);
      setLesson(foundLesson);
      setIsCompleted(isLessonCompleted(lessonId));
      if (setLastLesson) {
        setLastLesson(unitId, lessonId);
      }
    }
  }, [unitId, lessonId, isLessonCompleted, setLastLesson]);

  const handleComplete = () => {
    completeLesson(lesson.id, lesson.xp);
    setIsCompleted(true); 
    
    if (lesson.type !== 'quiz') {
      setShowCompletion(true);
      setTimeout(() => {
        setShowCompletion(false);
      }, 2000);
    }
  };

  const handleNext = () => {
    const next = getNextLesson();
    if (next) {
      navigate(`/learn/${next.unitId}/${next.lessonId}`);
    }
  };

  const handlePrevious = () => {
    const prev = getPreviousLesson();
    if (prev) {
      navigate(`/learn/${prev.unitId}/${prev.lessonId}`);
    }
  };

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="text-xl text-slate-500 mb-4">Loading lesson...</div>
        <button onClick={() => navigate('/')} className="btn btn-secondary">
          Back to Dashboard
        </button>
      </div>
    );
  }

  if (lesson.type === 'quiz') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="max-w-3xl mx-auto py-8 px-4"
      >
        <button onClick={() => navigate('/')} className="btn btn-secondary mb-6">
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>
        <Quiz data={lesson} onComplete={handleComplete} />
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto pb-24 px-4 md:px-0"
    >
      {showCompletion && <Confetti recycle={false} numberOfPieces={500} />}
      
      <header className="flex items-center gap-6 mb-8">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/')} 
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm"
        >
          <ArrowLeft size={24} />
        </motion.button>
        <div className="flex-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Lesson</span>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-heading font-bold text-slate-900 dark:text-white"
          >
            {lesson.title}
          </motion.h1>
        </div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-bold text-sm"
        >
          +{lesson.xp} XP
        </motion.div>
      </header>

      <div className="space-y-8">
        {lesson.content.map((block, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-6 md:p-8"
          >
            {block.type === 'text' && (
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{block.value}</p>
            )}

            {block.type === 'vocabulary' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {block.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-heading font-bold text-lg text-primary">{item.de}</div>
                        {item.pronunciation && (
                          <div className="text-sm font-mono text-slate-400">/{item.pronunciation}/</div>
                        )}
                      </div>
                      <div className="text-right font-medium text-slate-600 dark:text-slate-400">{item.en}</div>
                    </div>
                    {item.context && (
                      <div 
                        className="text-sm text-slate-500 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700"
                        dangerouslySetInnerHTML={{ __html: formatTextWithBold(item.context) }} 
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {block.type === 'sentences' && (
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">Practice Sentences</h4>
                {block.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="text-lg font-medium text-primary mb-1">{item.de}</div>
                    {item.pronunciation && (
                      <div className="text-sm text-rose-500 font-mono mb-1">/{item.pronunciation}/</div>
                    )}
                    <div className="text-slate-500 italic">{item.en}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {block.type === 'dialogue' && (
              <div className="space-y-6">
                {block.lines.map((line, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: line.speaker === 'You' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex flex-col ${line.speaker === 'You' ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`
                      max-w-[85%] p-4 rounded-2xl relative shadow-sm
                      ${line.speaker === 'You' 
                        ? 'bg-blue-50 dark:bg-blue-900/20 rounded-br-none border border-blue-100 dark:border-blue-800/30' 
                        : 'bg-white dark:bg-slate-800 rounded-bl-none border border-slate-200 dark:border-slate-700'
                      }
                    `}>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{line.speaker}</div>
                      <div className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-1">{line.de}</div>
                      {line.pronunciation && (
                        <div className="text-xs font-mono text-slate-400 mb-2">/{line.pronunciation}/</div>
                      )}
                      <div className="text-sm text-slate-500 italic pt-2 border-t border-slate-200/50 dark:border-slate-700/50">{line.en}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {block.type === 'table' && (
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      {block.headers.map((h, i) => (
                        <th key={i} className="p-4 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: formatTextWithBold(h) }} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, i) => (
                      <motion.tr 
                        key={i}
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                        className="border-b border-slate-100 dark:border-slate-800 last:border-0"
                      >
                        {row.map((cell, j) => (
                          <td key={j} className="p-4 text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: formatTextWithBold(cell) }} />
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {block.type === 'info' && (
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 rounded-xl p-4">
                <h4 className="font-bold text-amber-800 dark:text-amber-500 mb-2 flex items-center gap-2">
                  <span>💡</span> {block.title}
                </h4>
                <p className="text-amber-900/80 dark:text-amber-200/80" dangerouslySetInnerHTML={{ __html: formatTextWithBold(block.value) }} />
              </div>
            )}
          </motion.div>
        ))}

        {lesson.recap && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 border-t-4 border-t-rose-500"
          >
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="text-rose-500">✨</span> Chapter Recap
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Important Words</h3>
                <ul className="space-y-3">
                  {lesson.recap.vocabulary.map((item, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{item.de}</span>
                      <span className="text-slate-400 text-sm">{item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-rose-500 mb-4 uppercase tracking-wider text-sm">Daily Life Sentences</h3>
                <ul className="space-y-4">
                  {lesson.recap.sentences.map((item, i) => (
                    <li key={i} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <div className="font-medium text-slate-800 dark:text-slate-200">{item.de}</div>
                      <div className="text-slate-500 text-sm italic">{item.en}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-12 flex flex-col items-center gap-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`btn btn-lg w-full md:w-auto px-8 py-4 text-lg shadow-xl ${isCompleted ? 'btn-success' : 'btn-primary'}`} 
          onClick={handleComplete}
          disabled={isCompleted}
        >
          <CheckCircle size={24} className="mr-2" />
          {isCompleted ? 'Chapter Completed' : 'Complete Chapter'}
        </motion.button>

        <div className="flex justify-between w-full max-w-md mt-4">
          <motion.button 
            whileHover={{ x: -5 }}
            className={`btn btn-secondary ${!getPreviousLesson() ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrevious}
            disabled={!getPreviousLesson()}
          >
            <ChevronLeft size={20} className="mr-2" />
            Previous
          </motion.button>

          <motion.button 
            whileHover={{ x: 5 }}
            className={`btn btn-secondary ${!getNextLesson() ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={!getNextLesson()}
          >
            Next
            <ChevronRight size={20} className="ml-2" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showCompletion && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="text-center"
            >
              <div className="text-8xl mb-4 animate-bounce">🎉</div>
              <h2 className="text-4xl font-heading font-black text-slate-900 dark:text-white mb-2">Lesson Completed!</h2>
              <p className="text-2xl text-slate-500 dark:text-slate-400">+{lesson.xp} XP Earned</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
