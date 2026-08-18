import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThemeControls from './components/ThemeControls/ThemeControls';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <ThemeControls />
        <main>
          <Home />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 
