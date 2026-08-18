import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, children, bodyClassName = '', animationType = 'slideUp' }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const animations = {
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 }
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 20 }
    }
  };

  const selectedAnimation = animations[animationType] || animations.slideUp;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="brutal-modal-overlay" onClick={onClose}>
          <motion.div 
            className="brutal-modal-content"
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            exit={selectedAnimation.exit}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="brutal-modal-header">
              <h2>{title}</h2>
              <button className="brutal-close-btn" onClick={onClose}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className={`brutal-modal-body ${bodyClassName}`}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
