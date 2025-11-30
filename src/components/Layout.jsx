import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BookOpen, Trophy, Home, Settings as SettingsIcon,  Menu, X } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const Sidebar = ({ isOpen, toggle }) => {
  const { progress } = useProgress();

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      toggle();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <span className="logo-icon">🇩🇪</span>
          <h1 className="logo-text">DeutschLernen</h1>
        </div>
        <button className="close-menu-btn" onClick={toggle}>
          <X size={24} />
        </button>
      </div>

      <nav className="nav-menu">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          to="/learn" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <BookOpen size={20} />
          <span>Learn</span>
        </NavLink>
        <NavLink 
          to="/achievements" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <Trophy size={20} />
          <span>Achievements</span>
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <SettingsIcon size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="user-stats">
        <div className="stat-item">
          <span className="stat-label">XP</span>
          <span className="stat-value">{progress.xp}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Level</span>
          <span className="stat-value">{progress.level}</span>
        </div>
      </div>
    </aside>
  );
};

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="app-layout">
      {/* Backdrop for mobile */}
      <div 
        className={`backdrop ${isSidebarOpen ? 'visible' : ''}`} 
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(!isSidebarOpen)} />
      
      {/* Mobile Header - Moved outside main content */}
      <header className="mobile-header">
        <button onClick={() => setSidebarOpen(true)} className="menu-btn">
          <Menu size={24} />
        </button>
        <span className="mobile-logo">DeutschLernen</span>
      </header>

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>

      <style>{`
        .app-layout {
          display: flex;
          min-height: 100vh;
        }

        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 90;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-base);
        }

        .backdrop.visible {
          opacity: 1;
          pointer-events: auto;
        }

        /* Book Spine Sidebar */
        .sidebar {
          width: 260px;
          background: var(--bg-paper);
          border-right: 2px solid rgba(139, 115, 85, 0.2);
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
          transition: transform var(--transition-base);
          z-index: 100;
          box-shadow: var(--shadow-page);
        }

        .sidebar::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 3px;
          height: 100%;
          background: var(--gradient-gold);
          opacity: 0.4;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xl);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid rgba(139, 115, 85, 0.15);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .close-menu-btn {
          display: none;
          padding: var(--spacing-xs);
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          transition: all var(--transition-base);
        }

        .close-menu-btn:hover {
          background: rgba(212, 165, 116, 0.1);
          color: var(--accent-gold);
        }

        .logo-text {
          font-weight: 700;
          font-size: 1.35rem;
          color: var(--text-primary);
          font-family: 'Crimson Text', serif;
          letter-spacing: -0.01em;
        }

        .logo-icon {
          font-size: 1.75rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all var(--transition-base);
          position: relative;
        }

        .nav-item:hover {
          background: rgba(212, 165, 116, 0.1);
          color: var(--accent-gold);
          transform: translateX(4px);
        }

        .nav-item.active {
          background: var(--gradient-gold);
          color: white;
          box-shadow: var(--shadow-page);
        }

        .nav-item.active:hover {
          transform: translateX(0);
        }

        /* User Stats */
        .user-stats {
          margin-top: var(--spacing-md);
          padding-top: var(--spacing-md);
          border-top: 1px solid rgba(139, 115, 85, 0.15);
          display: flex;
          gap: var(--spacing-md);
          justify-content: space-around;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-sm);
          background: rgba(212, 165, 116, 0.08);
          border-radius: var(--radius-md);
          border: 1px solid rgba(212, 165, 116, 0.15);
          flex: 1;
          transition: all var(--transition-base);
        }

        .stat-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-page);
          border-color: var(--accent-gold);
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .stat-value {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--accent-gold);
          font-family: 'Crimson Text', serif;
          line-height: 1;
        }

        .main-content {
          flex: 1;
          margin-left: 260px;
          min-height: 100vh;
        }

        .content-container {
          animation: fadeIn 0.5s ease-out;
        }

        /* Mobile Header */
        .mobile-header {
          display: none;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: var(--bg-paper);
          border-bottom: 2px solid rgba(139, 115, 85, 0.2);
          box-shadow: var(--shadow-page);
          position: relative;
        }

        .mobile-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--gradient-gold);
          opacity: 0.6;
        }

        .menu-btn {
          padding: var(--spacing-sm);
          color: var(--accent-gold);
          border-radius: var(--radius-sm);
          transition: all var(--transition-base);
        }

        .menu-btn:hover {
          background: rgba(212, 165, 116, 0.15);
        }

        .mobile-logo {
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          font-family: 'Crimson Text', serif;
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          
          .sidebar.open {
            transform: translateX(0);
            box-shadow: var(--shadow-book);
          }

          .close-menu-btn {
            display: block;
          }

          .main-content {
            margin-left: 0;
            padding-top: 70px;
          }

          .mobile-header {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 80;
            width: 100%;
            box-sizing: border-box;
          }

          .user-stats {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
}
