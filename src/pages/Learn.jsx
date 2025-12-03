import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

export default function Learn() {
  const navigate = useNavigate();
  const { progress } = useProgress();

  useEffect(() => {
    // If there's a last lesson, navigate to it
    if (progress.lastLesson && progress.lastLesson.unitId && progress.lastLesson.lessonId) {
      navigate(`/learn/${progress.lastLesson.unitId}/${progress.lastLesson.lessonId}`);
    } else {
      // Otherwise go to dashboard
      navigate('/');
    }
  }, [navigate, progress.lastLesson]);

  return null; // This component just redirects
}
