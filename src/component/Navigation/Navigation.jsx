import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = document.querySelector('.top-nav').offsetHeight;
      const targetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  const navItems = [
    { id: 'home', icon: 'fas fa-home', text: 'Home' },
    { id: 'skills', icon: 'fas fa-code', text: 'Skills' },
    { id: 'experience', icon: 'fas fa-briefcase', text: 'Experience' },
    { id: 'projects', icon: 'fas fa-project-diagram', text: 'Projects' },
    { id: 'contact', icon: 'fas fa-envelope', text: 'Contact' }
  ];

  return (
    <nav className={`top-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">
          <img src="/kp_logo.png" alt="KP Logo" />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>

        <div className={`nav-container ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-icons-container">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    title={item.text}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    <i className={item.icon}></i>
                    <span className="nav-text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
