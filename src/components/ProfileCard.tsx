import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  // State for theme, default is light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the theme from localStorage, default to false (light mode) if not found
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true'; // Convert the string to boolean
  });

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      style={{
        background: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
