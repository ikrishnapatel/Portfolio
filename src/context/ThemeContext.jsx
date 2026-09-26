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
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');

  useEffect(() => {
    const savedColor = localStorage.getItem('primaryColor') || '#3B82F6';
    setPrimaryColor(savedColor);
    
    // Force light theme
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.setProperty('--primary-color', savedColor);
    document.documentElement.style.setProperty('--brutal-accent', savedColor);
  }, []);

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--brutal-accent', color);
    localStorage.setItem('primaryColor', color);
  };

  const value = {
    isDarkMode: false,
    primaryColor,
    toggleDarkMode: () => {}, // No-op
    changePrimaryColor
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 
