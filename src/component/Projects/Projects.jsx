import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../../../data/projects.json';
import Modal from '../UI/Modal/Modal';


const Projects = () => {
  const { projects } = projectsData;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="section">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {project.technologies && (
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}

          {/* See More Projects Card */}
          <motion.div
            className="project-card see-more-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.1 }}
            onClick={() => setIsModalOpen(true)}
          >
            <h3>See More Projects</h3>
            <div className="see-more-icon">
              <i className="fas fa-arrow-right"></i>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="All Projects"
        animationType="slideUp"
      >
        {projects.map((project, index) => (
          <div key={index} className="modal-project-item">
            <div className="modal-project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies?.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            {project.link && (
              <div className="modal-github-link-wrapper">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link modal-github-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </Modal>
    </section>
  );
};

export default Projects;
