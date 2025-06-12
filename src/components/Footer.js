import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-5 border-top" style={{ 
      borderColor: 'rgba(0, 255, 255, 0.1) !important',
      background: 'rgba(10, 10, 10, 0.9)'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3" style={{ opacity: 0.9 }}>
              <Shield className="text-cyan me-2" size={24} />
              <h5 className="text-white mb-0" >AEGIS DYNAMICS</h5>
            </div>
            <p className="text-light" style={{ opacity: 0.8 }}>
              Architecting the future of digital defense with quantum-ready, AI-powered cybersecurity solutions.
            </p>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3" style={{ opacity: 0.9 }}>Solutions</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Quantum Encryption</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Sentinel AI</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Identity Solutions</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3" style={{ opacity: 0.9 }}>Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>News</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3" style={{ opacity: 0.9 }}>Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Documentation</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Whitepapers</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Support</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3" style={{ opacity: 0.9 }}>Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Terms of Service</a></li>
              <li><a href="#" className="text-light text-decoration-none" style={{ opacity: 0.8 }}>Security</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" style={{ borderColor: 'rgba(0, 255, 255, 0.1)' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0" style={{ opacity: 0.6 }}>
              © 2025 Aegis Dynamics. All rights reserved. This is a mockup website for demonstration purposes only.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light mb-0" style={{ opacity: 0.6 }}>
              Securing tomorrow, today.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;