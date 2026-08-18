import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsData from '../../../data/skills.json';


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const categories = [
    { id: 'backend', icon: 'fas fa-server', label: 'Backend' },
    { id: 'cloud', icon: 'fas fa-cloud', label: 'Cloud' },
    { id: 'devops', icon: 'fas fa-cogs', label: 'DevOps' },
    { id: 'frontend', icon: 'fas fa-laptop-code', label: 'Frontend' }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-content">
        <h2 className="section-title">Skills</h2>
        
        {/* Skills Category Tabs */}
        <div className="skills-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Container */}
        <div className="skills-cards-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="skills-card-grid active"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {skillsData[activeCategory]?.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`skill-card ${skill.certified ? 'certified' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {skill.certified && (
                    <div className="certified-badge">
                      <i className="fas fa-certificate"></i>
                      <span>Certified</span>
                    </div>
                  )}
                  
                  <div className="skill-card-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  
                  <h3 className="skill-card-title">{skill.name}</h3>
                  
                  <div className="skill-card-exp">
                    <i className="fas fa-clock"></i>
                    <span>{skill.experience}</span>
                  </div>
                  
                  {skill.certified && skill.certificationName && (
                    <div className="certification-info">
                      {skill.certificationName}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
