import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BookOpen, Trophy, Home, Settings, Menu, X } from 'lucide-react';
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
          background-color: var(--background);
        }

        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 90;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .backdrop.visible {
          opacity: 1;
          pointer-events: auto;
        }

        .sidebar {
          width: 260px;
          background: var(--surface);
          border-right: 1px solid var(--border);
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
          transition: transform 0.3s ease;
          z-index: 100;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xl);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 0 var(--spacing-sm);
        }

        .close-menu-btn {
          display: none;
          padding: var(--spacing-xs);
          color: var(--text-muted);
        }

        .logo-text {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--primary);
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 500;
          transition: all 0.2s;
        }

        .nav-item:hover {
          background-color: var(--background);
          color: var(--primary);
        }

        .nav-item.active {
          background-color: var(--primary);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .user-stats {
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-around;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-value {
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-main);
        }

        .main-content {
          flex: 1;
          margin-left: 260px;
          padding: var(--spacing-xl);
        }

        .mobile-header {
          display: none;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          /* No margins here, handled in media query if needed */
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          
          .sidebar.open {
            transform: translateX(0);
            box-shadow: var(--shadow-lg);
          }

          .close-menu-btn {
            display: block;
          }

          .main-content {
            margin-left: 0;
            padding: 0;
            padding-top: 80px; /* Add padding to main content to account for fixed header */
          }

          .content-container {
            padding: var(--spacing-md);
          }

          .mobile-header {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 80;
            margin: 0;
            /* Width is implicit with left:0 right:0, or use width: 100% */
            width: 100%; 
            box-shadow: var(--shadow-sm);
            height: 70px; /* Explicit height to match padding calculation roughly */
            box-sizing: border-box; /* Ensure padding doesn't add to width */
          }
        }
      `}</style>
    </div>
  );
}
