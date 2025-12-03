import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LessonView from './pages/LessonView';
import Settings from './pages/Settings';
import Achievements from './pages/Achievements';
import Learn from './pages/Learn';

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="learn/:unitId/:lessonId" element={<LessonView />} />
            <Route path="settings" element={<Settings />} />
            <Route path="learn" element={<Learn />} />
            <Route path="achievements" element={<Achievements />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
