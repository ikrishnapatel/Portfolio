import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../UI/RotatingText/RotatingText';
import MetaBalls from '../UI/MetaBalls/MetaBalls';
import { useTheme } from '../../context/ThemeContext';
import profileData from '../../../data/profile.json';

const About = () => {
  const { primaryColor } = useTheme();

  return (
    <section id="about" className="section about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <MetaBalls
        color={primaryColor}
        cursorBallColor={primaryColor}
        cursorBallSize={4}
        ballCount={25}
        animationSize={50}
        enableMouseInteraction
        enableTransparency={true}
        hoverSmoothness={0.08}
        clumpFactor={1}
        speed={0.15}
      />

      {/* Floating Badges */}
      <motion.div 
        className="floating-badge badge-2 home-talk-btn"
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '18%',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          maxWidth: '300px',
          cursor: 'default',
          textTransform: 'uppercase'
        }}
      >
        <i className="fas fa-briefcase" style={{ fontSize: '1.5rem' }}></i>
        <span style={{ fontSize: '0.9rem', fontWeight: 'bold', lineHeight: 1.2 }}>3+ Years Enterprise Experience</span>
      </motion.div>

      <div className="section-content about-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-text-column">
          <motion.h4 
            className="about-tagline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span>{profileData.taglinePrefix || "I'M "}</span>
              <RotatingText
                texts={profileData.titles || ['Backend Engineer','Cloud Engineer', 'AI Engineer']}
                mainClassName="rotating-text-brutal"
                style={{
                  backgroundColor: 'var(--brutal-accent)',
                  color: 'var(--brutal-bg)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'inline-flex',
                  justifyContent: 'center'
                }}
                staggerFrom="random"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2100}
                splitBy="characters"
                auto
                loop
              />
            </div>
          </motion.h4>
          <motion.h2 
            className="about-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {profileData.description}
          </motion.h2>
        </div>

        <div className="about-download-cv" style={{ display: 'flex', flexDirection: 'column', marginTop: '2.5rem', gap: '1rem', maxWidth: '360px' }}>
          <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            <a 
              href="https://github.com/ikrishnapatel" 
              target="_blank"
              rel="noopener noreferrer"
              className="home-talk-btn"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flex: 1, padding: '1rem 0' }}
            >
              <span>GitHub</span>
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/ikrishnapatel" 
              target="_blank"
              rel="noopener noreferrer"
              className="home-talk-btn"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flex: 1, padding: '1rem 0' }}
            >
              <span>LinkedIn</span>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <a 
            href="/Krishna_Patel_CV.pdf" 
            download 
            className="home-talk-btn"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', width: '100%' }}
          >
            <span>Download CV</span>
            <i className="fas fa-download"></i>
          </a>
        </div>
      </div>

      {/* Tech Stack Ticker */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'var(--brutal-card-bg)',
        borderTop: 'var(--brutal-border-width) solid var(--brutal-border)',
        padding: '0.8rem 0',
        zIndex: 2,
        display: 'flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{ display: 'flex', gap: '2rem' }}
        >
          {[...Array(4)].flatMap(() => ['Java', 'Spring Boot', 'AWS', 'Google Cloud', 'LLMs', 'LangChain4j']).map((tech, i) => (
            <span key={i} style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--brutal-muted)', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              {tech} <span style={{ color: 'var(--brutal-accent)', margin: '0 2rem' }}>|</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
