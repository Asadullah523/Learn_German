import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LessonView from './pages/LessonView';

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="learn/:unitId/:lessonId" element={<LessonView />} />
            {/* Placeholders for future expansion */}
            <Route path="learn" element={<Navigate to="/" replace />} />
            <Route path="achievements" element={<div className="p-8 text-center">Achievements coming soon!</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
