import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LessonView from './pages/LessonView';
import Settings from './pages/Settings';
import Achievements from './pages/Achievements';
import Learn from './pages/Learn';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <ProgressProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </ProgressProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="learn/:unitId/:lessonId" element={<LessonView />} />
          <Route path="settings" element={<Settings />} />
          <Route path="learn" element={<Learn />} />
          <Route path="achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
