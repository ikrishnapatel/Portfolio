import React from 'react';
import { motion } from 'framer-motion';
import profileData from '../../../data/profile.json';
import profileImage from '../../../data/krishnapatel2.png';

const About = () => {
  return (
    <section id="about" className="neo-hero-section">
      {/* Left Column - Grid Background */}
      <div className="neo-hero-left">
        <div className="neo-hero-content">
          <motion.div 
            className="neo-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            HEY, I'M {profileData.name.split(' ')[0].toUpperCase()} 👋
          </motion.div>
          
          <motion.h1 
            className="neo-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            SOFTWARE<br/>ENGINEER
          </motion.h1>
          
          <motion.p 
            className="neo-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {profileData.description}
          </motion.p>
          
          <motion.div 
            className="neo-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#projects" className="neo-btn neo-btn-primary">VIEW MY WORK ↗</a>
            <a href="/Krishna_Patel_CV.pdf" download className="neo-btn neo-btn-secondary">DOWNLOAD RESUME ↓</a>
          </motion.div>
          
          <motion.div 
            className="neo-socials-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="neo-socials-title">CONNECT WITH ME</span>
            <div className="neo-socials">
              {profileData.socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="neo-social-btn" title={link.platform}>
                  {link.isSvg ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="1.2em" height="1.2em"><path d={link.svgPath} /></svg>
                  ) : (
                    <i className={link.iconClass}></i>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Column - Pink Background */}
      <div className="neo-hero-right">
        <div className="neo-image-container">
          <div className="neo-image-wrapper">
            <img src={profileImage} alt={profileData.name} className="neo-profile-img" />
          </div>
          
          {/* Floating Code Snippet */}
          <motion.div 
            className="neo-code-snippet mac-terminal"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            <div className="mac-terminal-header">
              <span className="mac-btn close"></span>
              <span className="mac-btn minimize"></span>
              <span className="mac-btn expand"></span>
            </div>
            <div className="mac-terminal-body">
              <div className="code-line"><span className="code-prompt">&gt;</span> const developer = {'{'}</div>
              <div className="code-line indented">code: 'Java, Python',</div>
              <div className="code-line indented">focus: 'Backend, Cloud, AI',</div>
              <div className="code-line indented">passion: 'Problem Solving'</div>
              <div className="code-line">{'}'}</div>
            </div>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
};

export default About;
