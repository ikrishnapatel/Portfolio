import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Programmer Analyst / Jr. Software Engineer',
      company: 'Cognizant',
      period: 'September 2023 - Present',
      description: 'Currently working as a Developer on project "The Hartford" in the Insurance Domain.',
      details: [
        'Role: Junior Developer',
        'Project: The Hartford (Insurance Domain)',
        'Status: Ongoing',
        'Responsibilities:',
        'Developing and maintaining front-end components using React/Angular',
        'Collaborating with cross-functional teams to deliver scalable solutions',
        'Writing clean, maintainable code and participating in code reviews',
        'Integrating APIs and ensuring responsive UI/UX across platforms'
      ]
    },
    {
      title: 'Intern',
      company: 'Cognizant',
      period: 'March 2023 - July 2023',
      description: 'Successfully completed a 6-month internship program with certification in Full Stack Development.',
      details: [
        'Duration: 6 months',
        'Training: Full Stack Development',
        'Key Highlights:',
        'Gained hands-on experience in both front-end and back-end technologies',
        'Worked on real-time assignments and collaborative coding tasks',
        'Built foundational skills in web development, version control, and deployment',
        'Received certification upon successful completion of the program'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-content">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="timeline-date">{exp.period}</span>
              </div>
              <div className="timeline-content">
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <ul className="timeline-details">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
