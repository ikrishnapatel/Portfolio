import React from 'react';
import { motion } from 'framer-motion';
import profileData from '../../../data/profile.json';
import MetaBalls from '../UI/MetaBalls/MetaBalls';
import { useTheme } from '../../context/ThemeContext';


const Home = () => {
  const { primaryColor } = useTheme();

  const handleLetsTalkClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="section home-dark-section">
      <div className="home-content-container">
        {/* Profile Avatar Card */}
        <motion.div 
          className="home-profile-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MetaBalls
            color={primaryColor}
            cursorBallColor={primaryColor}
            cursorBallSize={2}
            ballCount={15}
            animationSize={30}
            enableMouseInteraction
            enableTransparency={true}
            hoverSmoothness={0.15}
            clumpFactor={1}
            speed={0.3}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="home-profile-image-container">
              <img 
                src="/assets/profile_avatar.png" 
                alt={`${profileData.name} Profile`} 
                className="home-profile-image" 
              />
            </div>
          
          <h1 className="home-title-dark">
            {profileData.name || "Krishna Patel"}
          </h1>

          {/* Social Icons row */}
          <div className="profile-social-icons">
            {profileData.socialLinks?.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`profile-social-link ${link.isSvg ? 'leetcode-icon-link' : ''}`}
                title={link.platform}
              >
                {link.isSvg ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d={link.svgPath}/>
                  </svg>
                ) : (
                  <i className={link.iconClass}></i>
                )}
              </a>
            ))}
          </div>

          <button 
            className="home-talk-btn"
            onClick={handleLetsTalkClick}
          >
            <span>Let's Talk</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
