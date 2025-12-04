import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Theme presets with color palettes and animation styles
import { themePresets } from '../themePresets';
export { themePresets };

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedDark = localStorage.getItem('isDark');
      if (savedDark !== null) {
        return JSON.parse(savedDark);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [themePreset, setThemePreset] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('themePreset');
      return saved || 'default';
    }
    return 'default';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    localStorage.setItem('isDark', JSON.stringify(isDark));

    // Apply theme preset colors and animation type
    const activeTheme = themePresets[themePreset][isDark ? 'dark' : 'light'];
    const animation = themePresets[themePreset].animation;

    // Set animation type for CSS targeting
    root.setAttribute('data-theme-animation', animation);

    // Apply all colors safely (including nested text + gradients)
    Object.entries(activeTheme).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Handle nested objects like text.primary, text.secondary
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--color-${key}-${subKey}`, subValue);
        });
      } else {
        // Handle direct color values
        root.style.setProperty(`--color-${key}`, value);
      }
    });
  }, [isDark, themePreset]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const changeThemePreset = (preset) => {
    if (themePresets[preset]) {
      setThemePreset(preset);
      localStorage.setItem('themePreset', preset);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      isDark, 
      toggleTheme, 
      themePreset, 
      changeThemePreset,
      availableThemes: Object.keys(themePresets)
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
