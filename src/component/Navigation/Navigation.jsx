import React, { useState, useEffect } from 'react';
import profileData from '../../../data/profile.json';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'experience', text: 'Experience' },
    { id: 'badges', text: 'Certifications' },
    { id: 'projects', text: 'Projects' }
  ];

  useEffect(() => {
    // Also include 'contact' for intersection observer even if it's not in the main nav loop
    const sections = [...navItems.map(item => item.id), 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -45% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
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
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  return (
    <nav className="neo-nav">
      <div className="neo-nav-left">
        <span className="neo-nav-brand">{'>'} {profileData.name.split(' ')[0].toUpperCase()} DEV</span>
      </div>

      <div className="neo-nav-center">
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`neo-nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="neo-nav-right">
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          CONTACT ME ↗
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
