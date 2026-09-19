import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
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

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App; 
