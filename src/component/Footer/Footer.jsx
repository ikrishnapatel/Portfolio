import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; {currentYear} Krishna Patel. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <a href="#" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
