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
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedColor = localStorage.getItem('primaryColor') || '#3B82F6';
    
    // Default to light mode if no preference saved
    const darkMode = savedDarkMode === null ? false : savedDarkMode === 'true';
    
    setIsDarkMode(darkMode);
    setPrimaryColor(savedColor);
    
    // Apply theme to document
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    document.documentElement.style.setProperty('--primary-color', savedColor);
    document.documentElement.style.setProperty('--brutal-accent', savedColor);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--brutal-accent', color);
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
