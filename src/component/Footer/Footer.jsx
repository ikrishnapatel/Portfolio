import React from 'react';
import profileData from '../../../data/profile.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          {profileData.socialLinks?.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              title={link.platform}
            >
              {link.isSvg ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d={link.svgPath}/>
                </svg>
              ) : (
                <i className={link.iconClass}></i>
              )}
            </a>
          ))}
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} {profileData.name}</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
