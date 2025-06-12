import React, { useState } from 'react';
import { Lock, Eye, Network, Download } from 'lucide-react';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutions = [
    {
      icon: Lock,
      title: "Quantum-Resistant Encryption",
      subtitle: "Future-Proof Data Protection",
      description: "Advanced cryptographic algorithms designed to withstand quantum computing attacks, ensuring your sensitive data remains secure for decades to come.",
      features: ["Post-quantum cryptography", "Long-term data protection", "Seamless integration", "Performance optimization"]
    },
    {
      icon: Eye,
      title: "Sentinel AI Platform",
      subtitle: "Intelligent Threat Detection",
      description: "AI-powered cybersecurity platform that predicts, identifies, and neutralizes threats in real-time, often before human intervention is required.",
      features: ["Real-time monitoring", "Predictive analytics", "Automated response", "Machine learning evolution"]
    },
    {
      icon: Network,
      title: "Decentralized Identity",
      subtitle: "User-Controlled Authentication",
      description: "Blockchain-based identity verification that eliminates single points of failure while giving users complete control over their digital identity.",
      features: ["Self-sovereign identity", "Privacy-first design", "Interoperability", "Fraud prevention"]
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white mb-4" style={{ opacity: 0.9 }}>
            Our <span style={{ color: '#00ffff' }}>Solutions</span>
          </h2>
          <p className="lead text-light" style={{ opacity: 0.9 }}>
            Comprehensive cybersecurity solutions for the modern digital landscape
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4" style={{ opacity: 0.9 }}>
            <div className="nav flex-column nav-pills">
              {solutions.map((solution, index) => (
                <button
                  key={index}
                  className={`nav-link text-start p-3 mb-2 border-0 rounded-3 ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{
                    background: activeTab === index 
                      ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 102, 204, 0.2) 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                    color: activeTab === index ? '#00ffff' : '#fff',
                    borderLeft: activeTab === index ? '3px solid #00ffff' : '3px solid transparent'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <solution.icon size={24} className="me-3" />
                    <div>
                      <div className="fw-semibold">{solution.title}</div>
                      <small style={{ opacity: 0.7 }}>{solution.subtitle}</small>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-8">
            <div className="p-4 rounded-3 border border-cyan h-100" style={{
              background: 'rgba(0, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(0, 255, 255, 0.3) !important',
              opacity: 0.9
            }}>
              <div className="d-flex align-items-center mb-4" >
                {(() => {
                  const Icon = solutions[activeTab].icon;
                  return <Icon size={48} className="text-cyan me-3" />;
                })()}
                <div>
                  <h3 className="text-white mb-1">{solutions[activeTab].title}</h3>
                  <p className="text-cyan mb-0">{solutions[activeTab].subtitle}</p>
                </div>
              </div>
              
              <p className="text-light mb-4" style={{ opacity: 0.9 }}>
                {solutions[activeTab].description}
              </p>

              <div className="row">
                {solutions[activeTab].features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <div className="bg-cyan rounded-circle me-2" style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#00ffff'
                      }}></div>
                      <span className="text-light">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <button className="btn btn-outline-light me-3">
                  Learn More
                </button>
                <button className="btn text-cyan">
                  <Download size={16} className="me-2" />
                  Download Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;