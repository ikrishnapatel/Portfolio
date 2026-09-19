import React from 'react';
import { motion } from 'framer-motion';
import badgesData from '../../../data/badges.json';

// Duplicate for seamless infinite scroll loop
const allBadges = [...badgesData.badges, ...badgesData.badges];

const Badges = () => {
  return (
    <section id="badges" className="section badges-section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="badges-ticker">
          <div className="badges-track">
            {allBadges.map((badge, i) => (
              <a
                key={i}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-item"
                title={badge.title}
              >
                <img src={badge.image} alt={badge.title} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badges;
