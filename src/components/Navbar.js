import { useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);
  const handleNavigate = (path) => {
    navigate(path);
    closeSidebar();
  };

  const navItems = [
    ['Home', '/', 'bi-house-door-fill'],
    ['About', '/about', 'bi-info-circle-fill'],
    ['Services', '/services', 'bi-briefcase-fill'],
    ['Journey', '/journey', 'bi-map-fill'],
    ['Contact', '/contact', 'bi-envelope-fill'],
    ['Coming Soon', '/coming-soon', 'bi-hourglass-split'],  // Added Coming Soon page
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-brand btn btn-link text-white fw-bold d-flex align-items-center"
            onClick={() => navigate('/')}
            aria-label="Navigate to Home"
            type="button"
          >
            <img
              src="/assets/DWS-Logo.png"
              alt="Denzhewrites Logo"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            Denzhewrites
          </button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={sidebarOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop nav */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
            <ul className="navbar-nav">
              {navItems.map(([label, path, icon]) => (
                <li key={path} className="nav-item mx-2 d-flex align-items-center">
                  <button
                    className={`btn nav-button d-flex align-items-center gap-2 ${location.pathname === path ? 'fw-bold active' : ''}`}
                    onClick={() => navigate(path)}
                    aria-current={location.pathname === path ? 'page' : undefined}
                    type="button"
                  >
                    <i className={`bi ${icon}`} aria-hidden="true"></i>
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <nav
        className={`custom-sidebar ${sidebarOpen ? 'open' : ''}`}
        aria-hidden={!sidebarOpen}
        aria-label="Mobile navigation sidebar"
      >
        {/* Sidebar logo with image */}
        <div
          className="sidebar-logo d-flex align-items-center"
          onClick={() => { navigate('/'); closeSidebar(); }}
          tabIndex={0}
          role="button"
          aria-label="Navigate to Home"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              navigate('/');
              closeSidebar();
            }
          }}
          style={{ cursor: 'pointer', gap: '8px' }}
        >
          <img
            src="/assets/DWS-Logo.png"
            alt="Denzhewrites Logo"
            style={{ width: '30px', height: '30px' }}
          />
          <span>Denzhewrites</span>
        </div>

        <ul>
          {navItems.map(([label, path, icon]) => (
            <li key={path}>
              <button
                onClick={() => handleNavigate(path)}
                className={`d-flex align-items-center gap-2 nav-button ${location.pathname === path ? 'fw-bold active' : ''}`}
                aria-current={location.pathname === path ? 'page' : undefined}
                type="button"
              >
                <i className={`bi ${icon}`} aria-hidden="true"></i>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          tabIndex={-1}
          aria-hidden="true"
        />
      )}
    </>
  );
}
