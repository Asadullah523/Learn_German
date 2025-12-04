import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Theme presets with color palettes
export const themePresets = {
  default: {
    name: 'Default',
    light: {
      primary: '#2563EB',
      secondary: '#64748B',
      accent: '#E11D48',
      background: '#F1F5F9',
      surface: '#FFFFFF',
    },
    dark: {
      primary: '#3B82F6',
      secondary: '#94A3B8',
      accent: '#F43F5E',
      background: '#0F172A',
      surface: '#1E293B',
    },
  },
  ocean: {
    name: 'Ocean',
    light: {
      primary: '#0891B2',
      secondary: '#06B6D4',
      accent: '#6366F1',
      background: '#E0F2FE',
      surface: '#FFFFFF',
    },
    dark: {
      primary: '#22D3EE',
      secondary: '#67E8F9',
      accent: '#818CF8',
      background: '#082F49',
      surface: '#0E7490',
    },
  },
  forest: {
    name: 'Forest',
    light: {
      primary: '#16A34A',
      secondary: '#84CC16',
      accent: '#EAB308',
      background: '#F0FDF4',
      surface: '#FFFFFF',
    },
    dark: {
      primary: '#22C55E',
      secondary: '#A3E635',
      accent: '#FACC15',
      background: '#14532D',
      surface: '#166534',
    },
  },
  sunset: {
    name: 'Sunset',
    light: {
      primary: '#F97316',
      secondary: '#FB923C',
      accent: '#EC4899',
      background: '#FFF7ED',
      surface: '#FFFFFF',
    },
    dark: {
      primary: '#FB923C',
      secondary: '#FDBA74',
      accent: '#F472B6',
      background: '#7C2D12',
      surface: '#9A3412',
    },
  },
  neon: {
    name: 'Neon',
    light: {
      primary: '#A855F7',
      secondary: '#EC4899',
      accent: '#06B6D4',
      background: '#FAF5FF',
      surface: '#FFFFFF',
    },
    dark: {
      primary: '#C084FC',
      secondary: '#F472B6',
      accent: '#22D3EE',
      background: '#3B0764',
      surface: '#581C87',
    },
  },
};

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

    // Apply theme preset colors as CSS variables
    const colors = themePresets[themePreset][isDark ? 'dark' : 'light'];
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
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

