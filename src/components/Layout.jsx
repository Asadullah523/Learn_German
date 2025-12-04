import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Trophy, Home, Settings as SettingsIcon, Menu, X } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import ThemeToggle from './ThemeToggle';
import ParticleBackground from './ParticleBackground';

const Sidebar = ({ isOpen, toggle }) => {
  const { progress } = useProgress();

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      toggle();
    }
  };

  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/learn", icon: BookOpen, label: "Learn" },
    { to: "/achievements", icon: Trophy, label: "Achievements" },
    { to: "/settings", icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="h-full glass-panel m-4 flex flex-col border-white/20 dark:border-white/10">
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
            <span className="text-3xl filter drop-shadow-md">🇩🇪</span>
            <h1 className="font-heading font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              DeutschLernen
            </h1>
          </div>
          <button className="md:hidden p-2 text-slate-500 hover:text-primary transition-colors" onClick={toggle}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={handleNavClick}
              className={({ isActive }) => `
                relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                ${isActive 
                  ? 'text-white shadow-lg shadow-blue-500/25' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50'
                }
              `}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-primary rounded-xl -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <item.icon size={20} className={isActive ? 'text-white' : 'group-hover:text-primary transition-colors'} />
                  <span className="font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer Stats */}
        <div className="p-4 mt-auto">
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Your Progress</span>
              <ThemeToggle />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 text-center p-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
                <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">XP</div>
                <div className="font-heading font-bold text-xl text-slate-800 dark:text-slate-200">{progress.xp}</div>
              </div>
              <div className="flex-1 text-center p-2 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30">
                <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold mb-1">LEVEL</div>
                <div className="font-heading font-bold text-xl text-slate-800 dark:text-slate-200">{progress.level}</div>
              </div>
            </div>
          </div>
          
          {/* Creator Attribution */}
          <div className="mt-3 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Made with ❤️ by{' '}
              <span className="font-bold text-primary">Asad Ullah</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Blobs - Theme Adaptive */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob opacity-40"
          style={{ backgroundColor: 'var(--color-primary)' }}
        ></div>
        <div 
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000 opacity-40"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        ></div>
        <div 
          className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000 opacity-40"
          style={{ backgroundColor: 'var(--color-accent)' }}
        ></div>
      </div>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-3 glass-panel rounded-none border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇩🇪</span>
          <span className="font-heading font-bold text-lg text-slate-800 dark:text-white">DeutschLernen</span>
        </div>
        <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <Menu size={24} />
        </button>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="relative z-10 md:ml-80 min-h-screen p-4 md:p-8 pt-20 md:pt-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
