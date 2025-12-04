import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../context/ProgressContext';
import { useTheme, themePresets } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';
import { useSoundSettings } from '../context/SoundContext';
import { 
  Settings as SettingsIcon, 
  Moon, 
  Sun, 
  Trash2, 
  RefreshCw, 
  Volume2, 
  Bell, 
  Shield, 
  HelpCircle,
  LogOut,
  ChevronRight,
  VolumeX
} from 'lucide-react';

export default function Settings() {
  const { resetProgress, progress } = useProgress();
  const themeContext = useTheme();
  const { isDark, toggleTheme } = themeContext;
  const { showToast } = useToast();
  const { soundEnabled, toggleSound } = useSoundSettings();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
    showToast('Progress has been reset successfully', 'success');
  };

  const SettingSection = ({ title, children }) => (
    <div className="glass-panel p-6 md:p-8 mb-8">
      <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  const SettingRow = ({ icon: Icon, label, description, action, danger = false }) => (
    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${danger ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
          <Icon size={20} />
        </div>
        <div>
          <div className={`font-bold ${danger ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-white'}`}>{label}</div>
          {description && <div className="text-sm text-slate-500 dark:text-slate-400">{description}</div>}
        </div>
      </div>
      <div>{action}</div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto pb-24 px-4 md:px-0"
    >
      <header className="mb-12 text-center md:text-left">
        <h1 className="font-heading font-black text-4xl text-slate-900 dark:text-white mb-2 flex items-center justify-center md:justify-start gap-3">
          <SettingsIcon size={36} className="text-slate-400" />
          Settings
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400">Manage your preferences and account data</p>
      </header>

      <SettingSection title="Appearance">
        <SettingRow 
          icon={themeContext.isDark ? Moon : Sun}
          label="Dark Mode"
          description="Switch between light and dark theme"
          action={
            <button 
              onClick={themeContext.toggleTheme}
              className={`
                relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                ${themeContext.isDark ? 'bg-slate-700' : 'bg-slate-300'}
              `}
            >
              <motion.div 
                layout
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center"
                animate={{ x: themeContext.isDark ? 24 : 0 }}
              >
                {themeContext.isDark ? <Moon size={14} className="text-slate-800" /> : <Sun size={14} className="text-amber-500" />}
              </motion.div>
            </button>
          }
        />
      </SettingSection>

      {/* Theme Presets - Reorganized */}
      <SettingSection title="🎨 Theme Gallery">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Choose from our collection of beautiful themes with unique animations
        </p>
        
        {/* Default Light Theme */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span>☀️</span> Default Theme
          </h3>
          {(() => {
            const preset = 'default';
            const isActive = themeContext.themePreset === preset;
            const presetData = themePresets[preset];
            const colors = presetData[themeContext.isDark ? 'dark' : 'light'];
            
            return (
              <motion.button
                onClick={() => themeContext.changeThemePreset(preset)}
                className={`
                  w-full relative p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden group
                  ${isActive 
                    ? 'border-primary shadow-2xl shadow-primary/30 scale-[1.02]'  
                    : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl'
                  }
                `}
                whileHover={{ y: isActive ? 0 : -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex gap-2 mb-4">
                    {[colors.primary, colors.secondary, colors.accent].map((color, i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full shadow-lg border-2 border-white dark:border-slate-800 transform group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-heading font-bold text-lg ${isActive ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                      {presetData.name}
                    </h3>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: colors.secondary }} />
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                  </div>
                </div>
                
                {isActive && (
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                    style={{ backgroundColor: colors.primary }}
                  />
                )}
              </motion.button>
            );
          })()}
        </div>
        
        {/* All Premium Themes */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span>✨</span> Premium Themes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themeContext.availableThemes
              .filter(preset => themePresets[preset].category === 'premium-dark')
              .map((preset) => {
                const isActive = themeContext.themePreset === preset;
                const presetData = themePresets[preset];
                const colors = presetData.dark;
                
                return (
                  <motion.button
                    key={preset}
                    onClick={() => themeContext.changeThemePreset(preset)}
                    className={`
                      relative p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden group
                      ${isActive 
                        ? 'border-primary shadow-2xl shadow-primary/50 scale-[1.02] ring-2 ring-primary/20'  
                        : 'border-slate-700 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20'
                      }
                      bg-gradient-to-br from-slate-900 to-slate-800
                    `}
                    whileHover={{ y: isActive ? 0 : -6, scale: isActive ? 1.02 : 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`
                      }}
                    />
                    
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold">
                      PREMIUM
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex gap-3 mb-5">
                        {[colors.primary, colors.secondary, colors.accent].map((color, i) => (
                          <div 
                            key={i}
                            className="w-12 h-12 rounded-full shadow-2xl border-2 border-white/20 transform group-hover:scale-125 transition-all duration-300"
                            style={{ 
                              backgroundColor: color,
                              boxShadow: `0 0 20px ${color}80`
                            }}
                          />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-heading font-bold text-xl text-white mb-1">
                            {presetData.name}
                          </h3>
                          <p className="text-xs text-slate-400">{presetData.animation} animation</p>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-7 h-7 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg"
                          >
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="flex-1 h-3 rounded-full"
                          style={{ backgroundColor: colors.primary }}
                          whileHover={{ scaleY: 1.2 }}
                        />
                        <motion.div 
                          className="flex-1 h-3 rounded-full"
                          style={{ backgroundColor: colors.secondary }}
                          whileHover={{ scaleY: 1.2 }}
                        />
                        <motion.div 
                          className="flex-1 h-3 rounded-full"
                          style={{ backgroundColor: colors.accent }}
                          whileHover={{ scaleY: 1.2 }}
                        />
                      </div>
                    </div>
                    
                    {isActive && (
                      <>
                        <motion.div 
                          className="absolute inset-0 rounded-2xl opacity-30 blur-2xl"
                          style={{ backgroundColor: colors.primary }}
                          animate={{
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                      </>
                    )}
                  </motion.button>
                );
              })}
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Preferences">
        <SettingRow 
          icon={soundEnabled ? Volume2 : VolumeX}
          label="Sound Effects"
          description="Play sounds for correct/incorrect answers"
          action={
            <button 
              onClick={toggleSound}
              className={`
                relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                ${soundEnabled ? 'bg-green-600' : 'bg-slate-300 dark:bg-slate-700'}
              `}
            >
              <motion.div 
                layout
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center"
                animate={{ x: soundEnabled ? 24 : 0 }}
              >
                {soundEnabled ? <Volume2 size={14} className="text-green-600" /> : <VolumeX size={14} className="text-slate-500" />}
              </motion.div>
            </button>
          }
        />
        <SettingRow 
          icon={Bell}
          label="Notifications"
          description="Daily reminders to keep your streak"
          action={
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Coming Soon</span>
              <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full opacity-50 cursor-not-allowed"></div>
            </div>
          }
        />
      </SettingSection>

      <SettingSection title="Data & Privacy">
        <SettingRow 
          icon={RefreshCw}
          label="Sync Progress"
          description="Last synced: Just now"
          action={
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
              <RefreshCw size={20} />
            </button>
          }
        />
        <SettingRow 
          icon={Shield}
          label="Privacy Policy"
          action={
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
              <ChevronRight size={20} />
            </button>
          }
        />
      </SettingSection>

      <div className="mt-12">
        <h2 className="font-heading font-bold text-xl text-red-600 dark:text-red-400 mb-6 flex items-center gap-2 px-2">
          Danger Zone
        </h2>
        <div className="border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-red-700 dark:text-red-400 text-lg mb-1">Reset Progress</h3>
              <p className="text-red-600/80 dark:text-red-400/70 text-sm leading-relaxed max-w-md">
                This will permanently delete all your progress, XP, streaks, and achievements. This action cannot be undone.
              </p>
            </div>
            {!showResetConfirm ? (
              <button 
                onClick={() => setShowResetConfirm(true)}
                className="px-4 py-2 bg-white border border-red-200 text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors shadow-sm whitespace-nowrap"
              >
                Reset Data
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <button 
                  onClick={handleReset}
                  className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-sm whitespace-nowrap"
                >
                  Confirm Reset
                </button>
                <button 
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 bg-transparent text-red-600 font-bold rounded-lg hover:bg-red-100/50 transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 text-sm">
          DeutschLernen v1.0.0 • Made with ❤️
        </p>
      </div>
    </motion.div>
  );
}
