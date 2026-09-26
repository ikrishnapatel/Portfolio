import React, { createContext, useContext, useState, useEffect } from 'react';
import themeData from '../../data/theme.json';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const defaultColor = themeData.colorOptions[0].color;
  const [primaryColor, setPrimaryColor] = useState(defaultColor);

  useEffect(() => {
    const savedColor = localStorage.getItem('primaryColor') || defaultColor;
    setPrimaryColor(savedColor);
    
    // Force light theme
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.setProperty('--primary-color', savedColor);
    document.documentElement.style.setProperty('--brutal-accent', savedColor);
    
    const option = themeData.colorOptions.find(opt => opt.color === savedColor) || themeData.colorOptions[0];
    document.documentElement.style.setProperty('--brutal-secondary', option.secondaryColor);
  }, []);

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--brutal-accent', color);
    
    const option = themeData.colorOptions.find(opt => opt.color === color) || themeData.colorOptions[0];
    document.documentElement.style.setProperty('--brutal-secondary', option.secondaryColor);
    
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
