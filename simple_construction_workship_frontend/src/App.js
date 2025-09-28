import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/common.css';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import TakeThisJobs from './pages/TakeThisJobs';
import JobsDetailOpen from './pages/JobsDetailOpen';
import Profile from './pages/Profile';

// PUBLIC_INTERFACE
function App() {
  /** Root application with theme toggle and router to navigate between three converted screens. */
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <BrowserRouter>
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <NavLink to="/take" className={({ isActive }) => (isActive ? 'active' : '')}>Take Job</NavLink>
          <NavLink to="/details" className={({ isActive }) => (isActive ? 'active' : '')}>Job Details</NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/take" replace />} />
          <Route path="/take" element={<TakeThisJobs />} />
          <Route path="/details" element={<JobsDetailOpen />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/take" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
