import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const typewriterRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const text = "Full Stack Developer";
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 3000;

    const type = () => {
      const currentText = text.substring(0, charIndex);
      if (typewriterRef.current) {
        typewriterRef.current.textContent = currentText;
      }

      if (!isDeleting) {
        if (charIndex < text.length) {
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(() => {
            isDeleting = true;
            type();
          }, pauseTime);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTimeout(type, deletingSpeed);
        } else {
          isDeleting = false;
          setTimeout(type, pauseTime);
        }
      }
    };

    type();
  }, []);

  const skillIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", alt: "Angular" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", alt: "AWS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "Azure" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", alt: "Jenkins" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" }
  ];

  return (
    <section id="home" className="section">
      <div className="animated-background">
        {skillIcons.map((skill, index) => (
          <motion.img
            key={index}
            className="floating-skill"
            src={skill.src}
            alt={skill.alt}
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              rotate: Math.random() * 360
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              rotate: [null, Math.random() * 360 + 360]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="home-content">
        <motion.h1 
          className="home-title"
          initial= 
