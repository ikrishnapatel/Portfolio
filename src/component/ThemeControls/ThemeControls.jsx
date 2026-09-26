import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';


const ThemeControls = () => {
  const { isDarkMode, primaryColor, toggleDarkMode, changePrimaryColor } = useTheme();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const colorOptions = [
    { color: '#10b981', title: 'Green' },
    { color: '#3B82F6', title: 'Blue' },
    { color: '#FACC15', title: 'Yellow' },
    { color: '#f97316', title: 'Orange' },
    { color: '#ef4444', title: 'Red' }
  ];

  // Close color options panel when clicking outside of it
  useEffect(() => {
    if (!isColorPickerOpen) return;

    const handleOutsideClick = (e) => {
      if (!e.target.closest('.theme-switcher')) {
        setIsColorPickerOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isColorPickerOpen]);

  return (
    <div className="theme-controls brutal-controls">
      <div className={`theme-switcher ${isColorPickerOpen ? 'active' : ''}`}>
        <button 
          className="theme-toggle brutal-btn"
          onClick={(e) => {
            e.stopPropagation();
            setIsColorPickerOpen(!isColorPickerOpen);
          }}
          title="Change accent color"
        >
          <i className="fas fa-palette"></i>
        </button>
        
        <div className="color-options brutal-color-options" onClick={(e) => e.stopPropagation()}>
          {colorOptions.map((option) => (
            <div
              key={option.color}
              className={`color-option brutal-color-swatch ${primaryColor === option.color ? 'selected' : ''}`}
              style={{ backgroundColor: option.color }}
              title={option.title}
              onClick={() => {
                changePrimaryColor(option.color);
                setIsColorPickerOpen(false);
              }}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ThemeControls;
