import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/Navbar.css';
import { useLayoutEffect } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);
  const handleNavigate = (path) => {
    navigate(path);
    closeSidebar();
  };

  const navItems = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['Journey', '/journey'],
    ['Audience', '/target-audience'],
    ['Marketing', '/marketing'],
    ['Advantage', '/competitive-advantage'],
    ['Finance', '/financial-plan'],
    ['Contact', '/contact'],
  ];

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark border-bottom border-body' : 'navbar-light bg-primary'}`}
        data-bs-theme={darkMode ? 'dark' : 'light'}
      >
        <div className="container">
          <button
            className="navbar-brand fw-bold btn btn-link p-0 m-0 text-decoration-none"
            onClick={() => navigate('/')}
            aria-label="Navigate to Home"
            type="button"
            style={{ color: darkMode ? 'white' : 'inherit' }}
          >
            Denzhewrites
          </button>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav */}
          <div className="collapse navbar-collapse d-none d-lg-flex align-items-center justify-content-end gap-3">
            <ul className="navbar-nav d-flex flex-row gap-3">
              {navItems.map(([label, path]) => (
                <li className="nav-item" key={path}>
                  <button
                    type="button"
                    className={`nav-button btn ${location.pathname === path ? 'active' : ''}`}
                    onClick={() => navigate(path)}
                    aria-current={location.pathname === path ? 'page' : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="btn btn-outline-light ms-3"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              type="button"
            >
              {darkMode ? (
                <>
                  <i className="bi bi-sun me-1"></i> Light
                </>
              ) : (
                <>
                  <i className="bi bi-moon me-1"></i> Dark
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`custom-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="list-unstyled px-3">
          {navItems.map(([label, path]) => (
            <li key={path} className="my-3">
              <button
                className="nav-button text-white fs-5 fw-semibold text-start w-100"
                type="button"
                onClick={() => handleNavigate(path)}
                aria-current={location.pathname === path ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Sidebar dark mode toggle */}
        <button
          className="sidebar-toggle-theme mt-auto ms-3 mb-3"
          onClick={toggleDarkMode}
          type="button"
        >
          {darkMode ? (
            <>
              <i className="bi bi-sun me-2"></i> Light Mode
            </>
          ) : (
            <>
              <i className="bi bi-moon me-2"></i> Dark Mode
            </>
          )}
        </button>
      </div>

      {/* Backdrop */}
      {sidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar}></div>}
    </>
  );
}
