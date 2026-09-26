import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import './styles/brutalism.css';
import Navigation from './component/Navigation/Navigation';

import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Experience from './component/Experience/Experience';
import Badges from './component/Badges/Badges';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import ThemeControls from './component/ThemeControls/ThemeControls';
import Footer from './component/Footer/Footer';
import Loader from './component/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(() => {
    const hasLoaded = sessionStorage.getItem('hasLoadedBefore');
    return !hasLoaded;
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasLoadedBefore', 'true');
    setLoading(false);
  };

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navigation />
          <div className="App">
            <ThemeControls />
            <main className="main-centered">
              <About />
              <Skills />
              <Experience />
              <Badges />
              <Projects />
              <Contact />
            </main>
          </div>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App; 
