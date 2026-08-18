import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#ec4899');

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedColor = localStorage.getItem('primaryColor') || '#ec4899';
    
    setIsDarkMode(savedDarkMode);
    setPrimaryColor(savedColor);
    
    // Apply theme to document
    if (savedDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    document.documentElement.style.setProperty('--primary-color', savedColor);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
  };

  const value = {
    isDarkMode,
    primaryColor,
    toggleDarkMode,
    changePrimaryColor
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 
