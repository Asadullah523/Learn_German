import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

// Helper to check if date is today
const isToday = (date) => {
  const today = new Date();
  const checkDate = new Date(date);
  return today.toDateString() === checkDate.toDateString();
};

// Helper to calculate streak
const calculateStreak = (lastVisit) => {
  if (!lastVisit) return 1;
  
  const today = new Date();
  const last = new Date(lastVisit);
  const diffTime = Math.abs(today - last);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return null; // Same day, don't increment
  if (diffDays === 1) return 'continue'; // Consecutive day
  return 'reset'; // Broke streak
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('germanAppProgress');
    const defaultState = {
      xp: 0,
      level: 1,
      completedLessons: [],
      currentUnit: 'u1',
      streak: 0,
      lastVisitDate: null,
      dailyXP: 0,
      weeklyActivity: [], // Last 7 days: [{date, xp, lessonsCompleted}]
      totalStudyTime: 0, // in minutes
      startDate: new Date().toISOString()
    };
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge default state with parsed state to ensure all fields exist
        return { ...defaultState, ...parsed };
      } catch (e) {
        console.error("Failed to parse progress:", e);
        return defaultState;
      }
    }
    return defaultState;
  });

  // Check and update streak on mount
  useEffect(() => {
    const streakStatus = calculateStreak(progress.lastVisitDate);
    const today = new Date().toISOString().split('T')[0];
    
    if (streakStatus === 'continue') {
      // Consecutive day - increment streak
      setProgress(prev => ({
        ...prev,
        streak: prev.streak + 1,
        lastVisitDate: today,
        dailyXP: 0 // Reset daily XP for new day
      }));
    } else if (streakStatus === 'reset') {
      // Broke streak - reset to 1
      setProgress(prev => ({
        ...prev,
        streak: 1,
        lastVisitDate: today,
        dailyXP: 0
      }));
    } else if (streakStatus === null && !progress.lastVisitDate) {
      // First visit ever
      setProgress(prev => ({
        ...prev,
        streak: 1,
        lastVisitDate: today
      }));
    }
    // If streakStatus is null and lastVisitDate exists, it's the same day - do nothing
  }, []); // Only run on mount

  useEffect(() => {
    localStorage.setItem('germanAppProgress', JSON.stringify(progress));
  }, [progress]);

  const addXp = (amount) => {
    setProgress(prev => ({
      ...prev,
      xp: prev.xp + amount,
      dailyXP: (prev.dailyXP || 0) + amount
    }));
  };

  const completeLesson = (lessonId, xpReward) => {
    if (!progress.completedLessons.includes(lessonId)) {
      const today = new Date().toISOString().split('T')[0];
      
      setProgress(prev => {
        // Update weekly activity
        const weeklyActivity = [...(prev.weeklyActivity || [])];
        const todayIndex = weeklyActivity.findIndex(day => day.date === today);
        
        if (todayIndex >= 0) {
          weeklyActivity[todayIndex] = {
            ...weeklyActivity[todayIndex],
            xp: weeklyActivity[todayIndex].xp + xpReward,
            lessonsCompleted: weeklyActivity[todayIndex].lessonsCompleted + 1
          };
        } else {
          weeklyActivity.push({
            date: today,
            xp: xpReward,
            lessonsCompleted: 1
          });
        }
        
        // Keep only last 7 days
        const last7Days = weeklyActivity.slice(-7);
        
        return {
          ...prev,
          xp: prev.xp + xpReward,
          dailyXP: (prev.dailyXP || 0) + xpReward,
          completedLessons: [...prev.completedLessons, lessonId],
          weeklyActivity: last7Days
        };
      });
    }
  };

  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const getTodayXP = () => {
    return progress.dailyXP || 0;
  };

  const getWeeklyActivity = () => {
    const today = new Date();
    const last7Days = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayData = progress.weeklyActivity?.find(day => day.date === dateStr);
      last7Days.push({
        date: dateStr,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        xp: dayData?.xp || 0,
        lessonsCompleted: dayData?.lessonsCompleted || 0
      });
    }
    
    return last7Days;
  };

  const addStudyTime = (minutes) => {
    setProgress(prev => ({
      ...prev,
      totalStudyTime: prev.totalStudyTime + minutes
    }));
  };

  const resetProgress = () => {
    const initialState = {
      xp: 0,
      level: 1,
      completedLessons: [],
      currentUnit: 'u1',
      streak: 0,
      lastVisitDate: null,
      dailyXP: 0,
      weeklyActivity: [],
      totalStudyTime: 0,
      startDate: new Date().toISOString()
    };
    setProgress(initialState);
    localStorage.setItem('germanAppProgress', JSON.stringify(initialState));
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      addXp, 
      completeLesson, 
      isLessonCompleted,
      getTodayXP,
      getWeeklyActivity,
      addStudyTime,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
