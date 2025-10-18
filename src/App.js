import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">Dark Mode Toggle Demo</h1>
          <DarkModeToggle />
        </header>
        
        <main className="app-content">
          <div className="feature-card">
            <h2>🌓 Dark Mode Toggle Feature</h2>
            <p>
              This demo showcases a fully accessible dark mode toggle implementation
              with the following features:
            </p>
            <ul className="feature-list">
              <li>Smooth transitions between light and dark themes</li>
              <li>Persistent theme preference (saved in localStorage)</li>
              <li>Keyboard accessible (try pressing Tab to focus, then Enter/Space to toggle)</li>
              <li>Screen reader friendly with proper ARIA labels</li>
              <li>Minimum 4.5:1 contrast ratio for WCAG compliance</li>
              <li>Support for prefers-contrast and prefers-reduced-motion</li>
            </ul>
          </div>

          <div className="feature-card">
            <h2>📋 Implementation Details</h2>
            <p><strong>Tech Stack:</strong></p>
            <ul className="feature-list">
              <li>React 18 with functional components and hooks</li>
              <li>Context API for global theme state management</li>
              <li>CSS custom properties (variables) for theming</li>
              <li>localStorage for persistence</li>
            </ul>
            <p style={{ marginTop: '1rem' }}><strong>Browser Support:</strong></p>
            <ul className="feature-list">
              <li>Chrome (latest 2 versions)</li>
              <li>Firefox (latest)</li>
              <li>Safari (latest)</li>
              <li>Edge (latest)</li>
            </ul>
          </div>

          <div className="feature-card">
            <h2>🎨 Try it out!</h2>
            <p>
              Click the toggle button in the top-right corner to switch between
              light and dark modes. Your preference will be saved and persist
              across page reloads.
            </p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
