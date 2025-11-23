import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('germanAppProgress');
    return saved ? JSON.parse(saved) : {
      xp: 0,
      level: 1,
      completedLessons: [], // Array of lesson IDs
      currentUnit: 'u1',
      streak: 1,
      lastLogin: new Date().toISOString()
    };
  });

  useEffect(() => {
    localStorage.setItem('germanAppProgress', JSON.stringify(progress));
  }, [progress]);

  const addXp = (amount) => {
    setProgress(prev => ({
      ...prev,
      xp: prev.xp + amount
    }));
  };

  const completeLesson = (lessonId, xpReward) => {
    if (!progress.completedLessons.includes(lessonId)) {
      setProgress(prev => ({
        ...prev,
        xp: prev.xp + xpReward,
        completedLessons: [...prev.completedLessons, lessonId]
      }));
    }
  };

  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      addXp, 
      completeLesson, 
      isLessonCompleted 
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
