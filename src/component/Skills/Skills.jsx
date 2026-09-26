import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsData from '../../../data/skills.json';

const categoryIcons = {
  backend: 'fas fa-server',
  cloud: 'fas fa-cloud',
  ai: 'fas fa-brain',
  devops: 'fas fa-cogs',
  database: 'fas fa-database',
  frontend: 'fas fa-desktop'
};

const Skills = () => {
  const categoryOrder = ['backend', 'cloud', 'ai', 'devops', 'database', 'frontend'];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const activeCategory = categoryOrder[currentIndex];
  const displayedSkills = skillsData[activeCategory] || [];
  
  const nextCategory = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryOrder.length);
  };

  const prevCategory = () => {
    setCurrentIndex((prev) => (prev - 1 + categoryOrder.length) % categoryOrder.length);
  };
  
  const nextCategoryName = categoryOrder[(currentIndex + 1) % categoryOrder.length];
  const progressPercent = Math.round(((currentIndex + 1) / categoryOrder.length) * 100);

  return (
    <section id="skills" className="section">
      <div className="section-content">
        <h2 className="section-title" style={{ display: 'none' }}>Skills</h2>
        
        <div className="neo-skills-wrapper">
          
          <div className="neo-skill-carousel-card" style={{
            background: 'transparent',
            width: '100%',
            maxWidth: '1000px',
            position: 'relative',
            margin: '0 auto'
          }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Row 1: Title and Pagination */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 className="neo-title neo-skill-category-title" style={{ margin: 0, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1rem', lineHeight: 1 }}>
                  {activeCategory} <i className={categoryIcons[activeCategory]} style={{ fontSize: '0.8em' }}></i>
                </h3>
                
                <div className="neo-pagination-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button onClick={prevCategory} className="neo-btn" style={{ padding: '0.5rem 1rem', background: '#fff', fontSize: '1.2rem' }}>
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <span style={{ fontWeight: '900', fontFamily: 'Courier New', fontSize: '1.1rem' }}>{currentIndex + 1}/{categoryOrder.length}</span>
                  <button onClick={nextCategory} className="neo-btn" style={{ padding: '0.5rem 1rem', background: '#fff', fontSize: '1.2rem' }}>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              
              {/* Row 2: Grid and Next Controls */}
              <div className="neo-skill-layout">
                
                {/* Left: Skills Grid */}
                <div className="neo-skill-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      className="neo-skills-grid-container"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      {displayedSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          title={skill.name}
                          className="neo-skill-card-horizontal"
                        >
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            style={{ 
                              width: '45px', 
                              height: '45px', 
                              objectFit: 'contain'
                            }} 
                          />
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }}>
                            <span className="neo-skill-name" style={{ 
                              fontFamily: 'var(--brutal-font)', 
                              fontWeight: 900, 
                              textTransform: 'uppercase', 
                              color: '#000',
                              lineHeight: 1.1,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              maxWidth: '100%'
                            }}>
                              {skill.name}
                            </span>
                            <span style={{ 
                              fontFamily: 'Courier New', 
                              fontSize: '0.75rem', 
                              fontWeight: 900, 
                              border: '1.5px solid #000', 
                              padding: '2px 6px', 
                              marginTop: '6px', 
                              textTransform: 'uppercase',
                              whiteSpace: 'nowrap'
                            }}>
                              {skill.experience || 'EXPERIENCED'}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Right: Next Button & Progress */}
                <div className="neo-skill-right">
                  <button onClick={nextCategory} className="neo-btn" style={{ padding: '0.8rem 1rem', background: 'var(--brutal-accent)', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                    NEXT: {nextCategoryName.toUpperCase()} <i className="fas fa-arrow-right"></i>
                  </button>
                  
                  <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ flex: 1, border: '2px solid #000', height: '14px', display: 'flex', background: '#fff' }}>
                      <div style={{ width: `${progressPercent}%`, background: '#000', transition: 'width 0.3s ease' }}></div>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '900', fontFamily: 'Courier New' }}>{progressPercent}%</span>
                  </div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
