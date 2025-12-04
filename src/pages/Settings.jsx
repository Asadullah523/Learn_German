import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';
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
  ChevronRight
} from 'lucide-react';

export default function Settings() {
  const { resetProgress, progress } = useProgress();
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
    showToast('Progress has been reset successfully', 'success');
  };

  const SettingSection = ({ title, children }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-6 md:p-8 mb-8"
    >
      <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
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
          icon={isDark ? Moon : Sun}
          label="Dark Mode"
          description="Toggle between light and dark themes"
          action={
            <button 
              onClick={toggleTheme}
              className={`
                relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                ${isDark ? 'bg-slate-700' : 'bg-slate-300'}
              `}
            >
              <motion.div 
                layout
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center"
                animate={{ x: isDark ? 24 : 0 }}
              >
                {isDark ? <Moon size={14} className="text-slate-800" /> : <Sun size={14} className="text-amber-500" />}
              </motion.div>
            </button>
          }
        />
      </SettingSection>

      <SettingSection title="Preferences">
        <SettingRow 
          icon={Volume2}
          label="Sound Effects"
          description="Play sounds for correct/incorrect answers"
          action={
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Coming Soon</span>
              <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full opacity-50 cursor-not-allowed"></div>
            </div>
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
