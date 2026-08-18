import React, { useState, useEffect } from 'react';
import profileData from '../../../data/profile.json';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'about', iconInactive: 'far fa-user', iconActive: 'fas fa-user', text: 'About' },
    { id: 'skills', iconInactive: 'far fa-keyboard', iconActive: 'fas fa-code', text: 'Skills' },
    { id: 'experience', iconInactive: 'far fa-folder', iconActive: 'fas fa-briefcase', text: 'Experience' },
    { id: 'projects', iconInactive: 'far fa-lightbulb', iconActive: 'fas fa-project-diagram', text: 'Projects' },
    { id: 'contact', iconInactive: 'far fa-envelope', iconActive: 'fas fa-paper-plane', text: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -45% 0px', // Detect when a section is active in the viewport middle
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
    <nav className={`top-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="nav-name" style={{ fontFamily: 'var(--brutal-font)', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{profileData.name}</span>
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
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    <i className={activeSection === item.id ? item.iconActive : item.iconInactive}></i>
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
