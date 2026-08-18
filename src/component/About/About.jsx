import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../UI/RotatingText/RotatingText';
import MetaBalls from '../UI/MetaBalls/MetaBalls';
import { useTheme } from '../../context/ThemeContext';
import profileData from '../../../data/profile.json';

const About = () => {
  const { primaryColor } = useTheme();
  const stats = profileData.stats || [];

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

        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="about-stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="about-stat-number">{stat.value}</h3>
              <p className="about-stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
