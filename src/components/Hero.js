import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Architecting the Future of Digital Defense",
    "Proactive Intelligence Against Evolving Threats",
    "Quantum-Ready Security Solutions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .aegis-shield {
          animation: shieldPulse 4s ease-in-out infinite;
        }
        
        .shield-outline {
          animation: outlinePulse 3s ease-in-out infinite;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawShield 2s ease-out forwards, outlinePulse 3s ease-in-out infinite 2s;
        }
        
        .shield-inner-1 {
          animation: innerPulse1 2.5s ease-in-out infinite 0.5s;
        }
        
        .shield-inner-2 {
          animation: innerPulse2 2.8s ease-in-out infinite 1s;
        }
        
        .shield-inner-3 {
          animation: innerPulse3 3.2s ease-in-out infinite 1.5s;
        }
        
        .lightning {
          animation: lightningFlash 4s ease-in-out infinite;
        }
        
        .lightning-1 { animation-delay: 0s; }
        .lightning-2 { animation-delay: 1s; }
        .lightning-3 { animation-delay: 2s; }
        .lightning-4 { animation-delay: 3s; }
        
        .central-pattern path {
          animation: chevronPulse 2s ease-in-out infinite;
        }
        
        .chevron-1 { animation-delay: 0s; }
        .chevron-2 { animation-delay: 0.2s; }
        .chevron-3 { animation-delay: 0.4s; }
        .chevron-4 { animation-delay: 0.6s; }
        .chevron-5 { animation-delay: 0.8s; }
        
        @keyframes shieldPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.8)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 50px rgba(0, 255, 255, 1)); }
        }
        
        @keyframes drawShield {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes outlinePulse {
          0%, 100% { stroke-width: 4; opacity: 1; }
          50% { stroke-width: 6; opacity: 0.7; }
        }
        
        @keyframes innerPulse1 {
          0%, 100% { opacity: 0.8; stroke-width: 3; }
          50% { opacity: 0.4; stroke-width: 4; }
        }
        
        @keyframes innerPulse2 {
          0%, 100% { opacity: 0.6; stroke-width: 2; }
          50% { opacity: 0.3; stroke-width: 3; }
        }
        
        @keyframes innerPulse3 {
          0%, 100% { opacity: 0.4; stroke-width: 2; }
          50% { opacity: 0.2; stroke-width: 3; }
        }
        
        @keyframes lightningFlash {
          0%, 90%, 100% { opacity: 0.1; }
          5%, 15% { opacity: 0.8; }
          10% { opacity: 0.3; }
        }
        
        @keyframes chevronPulse {
          0%, 100% { opacity: 1; stroke-width: 2; }
          50% { opacity: 0.5; stroke-width: 4; }
        }
      `}</style>
      
      <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" id="home">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-white">
                <h1 className="display-2 fw-bold mb-4" style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #00ffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  AEGIS DYNAMICS
                </h1>
                <div className="h3 mb-4 text-cyan" style={{ 
                  minHeight: '80px',
                  color: '#00ffff',
                  transition: 'all 0.5s ease'
                }}>
                  {texts[currentText]}
                </div>
                <p className="lead mb-4 text-light" style={{ opacity: 0.9 }}>
                  Empowering individuals and enterprises with next-generation cybersecurity solutions that evolve faster than threats.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a 
                    href="#solutions" 
                    className="btn btn-lg px-4 py-3 rounded-pill border-0 fw-semibold" 
                    style={{
                      background: 'linear-gradient(135deg, #00ffff 0%, #0066cc 100%)',
                      color: '#000',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                      textDecoration: 'none'
                    }}
                  >
                    Explore Solutions <ChevronRight className="ms-2" size={20} />
                  </a>
                  <button className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold">
                    Request Demo <Play className="ms-2" size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="text-center">
                  <div className="position-relative d-inline-block">
                    {/* Custom Shield SVG */}
                    <svg 
                      width="300" 
                      height="350" 
                      viewBox="0 0 300 350" 
                      className="aegis-shield"
                      style={{
                        filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8))',
                      }}
                    >
                      {/* Lightning Background */}
                      <defs>
                        <radialGradient id="lightningGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" style={{stopColor: '#00ffff', stopOpacity: '0.3'}} />
                          <stop offset="100%" style={{stopColor: '#0066cc', stopOpacity: '0.1'}} />
                        </radialGradient>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#00ffff'}} />
                          <stop offset="50%" style={{stopColor: '#0088ff'}} />
                          <stop offset="100%" style={{stopColor: '#0066cc'}} />
                        </linearGradient>
                        <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#66ffff'}} />
                          <stop offset="100%" style={{stopColor: '#00ccff'}} />
                        </linearGradient>
                      </defs>
                      
                      {/* Lightning bolts */}
                      <g className="lightning-group">
                        <path d="M50 50 L80 30 L70 80 L100 60 L80 100" 
                          stroke="#00ffff" strokeWidth="2" fill="none" opacity="0.6" className="lightning lightning-1"/>
                        <path d="M220 40 L250 20 L240 70 L270 50 L250 90" 
                          stroke="#00ffff" strokeWidth="2" fill="none" opacity="0.6" className="lightning lightning-2"/>
                        <path d="M30 180 L60 160 L50 210 L80 190 L60 230" 
                          stroke="#00ffff" strokeWidth="2" fill="none" opacity="0.4" className="lightning lightning-3"/>
                        <path d="M240 200 L270 180 L260 230 L290 210 L270 250" 
                          stroke="#00ffff" strokeWidth="2" fill="none" opacity="0.4" className="lightning lightning-4"/>
                      </g>
                      
                      {/* Main Shield Outline */}
                      <path 
                        d="M150 20 L260 60 L260 180 L150 320 L40 180 L40 60 Z" 
                        fill="none" 
                        stroke="url(#shieldGrad)" 
                        strokeWidth="4"
                        className="shield-outline"
                      />
                      
                      {/* Inner Shield Layers */}
                      <path 
                        d="M150 35 L245 70 L245 175 L150 300 L55 175 L55 70 Z" 
                        fill="none" 
                        stroke="url(#innerGrad)" 
                        strokeWidth="3"
                        opacity="0.8"
                        className="shield-inner-1"
                      />
                      
                      <path 
                        d="M150 50 L230 80 L230 170 L150 280 L70 170 L70 80 Z" 
                        fill="none" 
                        stroke="url(#innerGrad)" 
                        strokeWidth="2"
                        opacity="0.6"
                        className="shield-inner-2"
                      />
                      
                      <path 
                        d="M150 65 L215 90 L215 165 L150 260 L85 165 L85 90 Z" 
                        fill="none" 
                        stroke="#66ffff" 
                        strokeWidth="2"
                        opacity="0.4"
                        className="shield-inner-3"
                      />
                      
                      {/* Central Arrow/Chevron Pattern */}
                      <g className="central-pattern">
                        <path d="M150 80 L180 110 L150 140 L120 110 Z" 
                          stroke="#00ffff" strokeWidth="3" fill="none" className="chevron-1"/>
                        <path d="M150 100 L170 120 L150 140 L130 120 Z" 
                          stroke="#66ffff" strokeWidth="2" fill="none" className="chevron-2"/>
                        <path d="M150 150 L190 180 L150 210 L110 180 Z" 
                          stroke="#00ffff" strokeWidth="3" fill="none" className="chevron-3"/>
                        <path d="M150 170 L180 190 L150 210 L120 190 Z" 
                          stroke="#66ffff" strokeWidth="2" fill="none" className="chevron-4"/>
                        <path d="M150 220 L200 250 L150 280 L100 250 Z" 
                          stroke="#00ffff" strokeWidth="3" fill="none" className="chevron-5"/>
                      </g>
                      
                      {/* Core Energy Center */}
                      <circle cx="150" cy="170" r="8" fill="#00ffff" opacity="0.9" className="energy-core">
                        <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite"/>
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;