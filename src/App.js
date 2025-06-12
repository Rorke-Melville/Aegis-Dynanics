import React from 'react';
// Import Bootstrap CSS from npm package
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS from npm package  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import ThreatMap from './components/ThreatMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-5">
          <About />
        </section>
        
        <section id="solutions" className="py-5">
          <Solutions />
        </section>
        
        <section id="threat-map" className="py-5">
          <ThreatMap />
        </section>
        
        <section id="contact" className="py-5">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;