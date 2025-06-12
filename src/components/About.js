import React from 'react';
import { Brain, Lock, Network } from 'lucide-react';

const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-4 fw-bold text-white mb-4" style={{ opacity: 0.9 }}>
              The <span style={{ color: '#00ffff' }}>Aegis Dynamics</span> Difference
            </h2>
            <p className="lead text-light" style={{ opacity: 0.9 }}>
              We don't just respond to threats – we anticipate them. Our quantum-ready, AI-driven approach ensures your digital assets remain secure in an ever-evolving landscape.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="h-100 p-4 rounded-3 border border-cyan card-hover" style={{
              background: 'rgba(0, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(0, 255, 255, 0.3) !important'
            }}>
              <Brain size={48} className="text-cyan mb-3" />
              <h4 className="text-white mb-3">Proactive Intelligence</h4>
              <p className="text-light" style={{ opacity: 0.8 }}>
                Our AI-powered systems learn and adapt, identifying potential threats before they materialize.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="h-100 p-4 rounded-3 border border-cyan card-hover" style={{
              background: 'rgba(0, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(0, 255, 255, 0.3) !important'
            }}>
              <Lock size={48} className="text-cyan mb-3" />
              <h4 className="text-white mb-3">Quantum-Ready</h4>
              <p className="text-light" style={{ opacity: 0.8 }}>
                Future-proof encryption methods that remain secure against quantum computing threats.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="h-100 p-4 rounded-3 border border-cyan card-hover" style={{
              background: 'rgba(0, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(0, 255, 255, 0.3) !important'
            }}>
              <Network size={48} className="text-cyan mb-3" />
              <h4 className="text-white mb-3">Decentralized Security</h4>
              <p className="text-light" style={{ opacity: 0.8 }}>
                Blockchain-based identity solutions that put control back in users' hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;