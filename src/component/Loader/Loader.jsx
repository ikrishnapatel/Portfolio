import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress to 100% over 2 seconds
    const duration = 2000;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Call completion handler after 2 seconds
    const timeout = setTimeout(() => {
      onLoadingComplete();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000000',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Progress Bar at the top */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '6px',
          width: `${progress}%`,
          background: 'var(--brutal-accent)',
          transition: 'width 0.05s linear'
        }}
      />
      
      {/* Loader Text using brutal font */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: 'var(--brutal-font)',
          fontSize: '4rem',
          color: 'var(--brutal-accent)',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          textShadow: '3px 3px 0px #ffffff'
        }}
      >
        Loading... {Math.floor(progress)}%
      </motion.div>
    </motion.div>
  );
};

export default Loader;
