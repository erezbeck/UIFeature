import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="dark-mode-toggle-container">
      <button
        className="dark-mode-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        aria-pressed={isDark}
        title="Toggle Dark Mode"
      >
        <span className="toggle-icon">
          {isDark ? (
            // Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            // Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </span>
        <span className="toggle-slider" />
      </button>
    </div>
  );
};

export default DarkModeToggle;
