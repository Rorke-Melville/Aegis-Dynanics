import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold text-white mb-4" style={{ opacity: 0.9 }}>
              Ready to <span style={{ color: '#00ffff' }}>Secure Your Future</span>?
            </h2>
            <p className="lead text-light mb-4" style={{ opacity: 0.9 }}>
              Contact our team to learn how Aegis Dynamics can protect your digital assets with next-generation cybersecurity solutions.
            </p>
            
            <div className="row g-3">
              <div className="col-md-6" style={{ opacity: 0.9 }}>
                <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'rgba(0, 255, 255, 0.1)' }}>
                  <Mail className="text-cyan me-3" size={24} />
                  <div>
                    <div className="text-white fw-semibold">Email</div>
                    <small className="text-light" style={{ opacity: 0.8 }}>contact@aegisdynamics.com</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ opacity: 0.9 }}>
                <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'rgba(0, 255, 255, 0.1)' }}>
                  <Phone className="text-cyan me-3" size={24} />
                  <div>
                    <div className="text-white fw-semibold">Phone</div>
                    <small className="text-light" style={{ opacity: 0.8 }}>+1 (555) 123-4567</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 rounded-3 border border-cyan" style={{
              background: 'rgba(0, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(0, 255, 255, 0.3) !important'
            }}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control bg-dark text-white border-secondary" 
                    placeholder="First Name"
                    style={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control bg-dark text-white border-secondary" 
                    placeholder="Last Name"
                    style={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
                  />
                </div>
                <div className="col-12">
                  <input 
                    type="email" 
                    className="form-control bg-dark text-white border-secondary" 
                    placeholder="Email Address"
                    style={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
                  />
                </div>
                <div className="col-12">
                  <select 
                    className="form-select bg-dark text-white border-secondary"
                    style={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
                  >
                    <option>Select Solution Interest</option>
                    <option>Quantum-Resistant Encryption</option>
                    <option>Sentinel AI Platform</option>
                    <option>Decentralized Identity</option>
                    <option>Enterprise Consultation</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea 
                    className="form-control bg-dark text-white border-secondary" 
                    rows="4" 
                    placeholder="Tell us about your security needs..."
                    style={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button 
                    type="submit" 
                    className="btn btn-lg w-100 fw-semibold"
                    style={{
                      background: 'linear-gradient(135deg, #00ffff 0%, #0066cc 100%)',
                      color: '#000',
                      border: 'none'
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;