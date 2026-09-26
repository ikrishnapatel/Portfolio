import React, { useState } from 'react';
import { motion } from 'framer-motion';
import experienceData from '../../../data/experience.json';
import Modal from '../UI/Modal/Modal';


const Experience = () => {
  const { experiences } = experienceData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="experience" className="section">
      <div className="section-content">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => {
            const hasProjects = exp.projects && exp.projects.length > 0;

            return (
              <motion.div
                key={index}
                className="timeline-card"
                style={{ animation: 'none' }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-date">{exp.dateRange}</span>
                </div>
                <div className="timeline-content">
                  <h4>
                    {exp.company}
                    {exp.domain && (
                      <span className="client-badge">Domain: {exp.domain}</span>
                    )}
                  </h4>
                  
                  {exp.location && (
                    <p className="location">
                      <i className="fas fa-map-marker-alt"></i> {exp.location}
                    </p>
                  )}
                  
                  <p>{exp.description}</p>
                  
                  {hasProjects ? (
                    <div className="projects-list">
                      {exp.projects.map((project, projIndex) => (
                        <div key={projIndex} className="exp-project">
                          <h5>
                            <i className="fas fa-project-diagram"></i> {project.name}
                          </h5>
                          <button 
                            className="brutal-btn exp-project-btn" 
                            onClick={() => setSelectedProject(project)}
                          >
                            View Details <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="timeline-details">
                      {exp.details && exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                      {exp.responsibilities && (
                        <>
                          <li>Key Highlights:</li>
                          <ul className="nested-details">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex}>{resp}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Experience Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || ''}
        bodyClassName="exp-modal-body"
        animationType="scaleUp"
      >
        {selectedProject && (
          <ul className="exp-modal-details">
            {selectedProject.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
      </Modal>
    </section>
  );
};

export default Experience;
