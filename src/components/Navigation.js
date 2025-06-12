import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Show navbar on mobile when scrolling
      if (window.innerWidth <= 991) {
        setIsMobileVisible(scrolled);
      } else {
        setIsMobileVisible(true);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMobileVisible(true);
      } else {
        setIsMobileVisible(window.scrollY > 50);
      }
    };

    handleScroll(); // Initial check
    handleResize(); // Initial check
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Shield SVG Component
  const ShieldLogo = ({ size = 40 }) => (
    <>
      <svg 
        width={size} 
        height={size * 1.17} // Maintain aspect ratio (350/300)
        viewBox="0 0 300 350" 
        className="aegis-shield-logo"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.6))',
        }}
      >
        {/* Gradients */}
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
      
      <style jsx>{`
        .aegis-shield-logo {
          animation: logoShieldPulse 4s ease-in-out infinite;
        }
        
        .shield-outline {
          animation: logoOutlinePulse 3s ease-in-out infinite;
        }
        
        .shield-inner-1 {
          animation: logoInnerPulse1 2.5s ease-in-out infinite 0.5s;
        }
        
        .shield-inner-2 {
          animation: logoInnerPulse2 2.8s ease-in-out infinite 1s;
        }
        
        .shield-inner-3 {
          animation: logoInnerPulse3 3.2s ease-in-out infinite 1.5s;
        }
        
        .lightning {
          animation: logoLightningFlash 4s ease-in-out infinite;
        }
        
        .lightning-1 { animation-delay: 0s; }
        .lightning-2 { animation-delay: 1s; }
        .lightning-3 { animation-delay: 2s; }
        .lightning-4 { animation-delay: 3s; }
        
        .central-pattern path {
          animation: logoChevronPulse 2s ease-in-out infinite;
        }
        
        .chevron-1 { animation-delay: 0s; }
        .chevron-2 { animation-delay: 0.2s; }
        .chevron-3 { animation-delay: 0.4s; }
        .chevron-4 { animation-delay: 0.6s; }
        .chevron-5 { animation-delay: 0.8s; }
        
        @keyframes logoShieldPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.6)); }
          50% { transform: scale(1.02); filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.8)); }
        }
        
        @keyframes logoOutlinePulse {
          0%, 100% { stroke-width: 4; opacity: 1; }
          50% { stroke-width: 5; opacity: 0.8; }
        }
        
        @keyframes logoInnerPulse1 {
          0%, 100% { opacity: 0.8; stroke-width: 3; }
          50% { opacity: 0.5; stroke-width: 3.5; }
        }
        
        @keyframes logoInnerPulse2 {
          0%, 100% { opacity: 0.6; stroke-width: 2; }
          50% { opacity: 0.4; stroke-width: 2.5; }
        }
        
        @keyframes logoInnerPulse3 {
          0%, 100% { opacity: 0.4; stroke-width: 2; }
          50% { opacity: 0.3; stroke-width: 2.5; }
        }
        
        @keyframes logoLightningFlash {
          0%, 90%, 100% { opacity: 0.1; }
          5%, 15% { opacity: 0.6; }
          10% { opacity: 0.2; }
        }
        
        @keyframes logoChevronPulse {
          0%, 100% { opacity: 1; stroke-width: 2; }
          50% { opacity: 0.6; stroke-width: 3; }
        }
      `}</style>
    </>
  );

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: isScrolled ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 255, 255, 0.6)' : 'none',
        transition: 'background 0.5s ease, backdrop-filter 0.5s ease, border-bottom 0.5s ease, transform 0.3s ease',
        zIndex: 1000,
        transform: isMobileVisible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          style={{
            fontSize: '1.5rem',
            display: 'flex',     
            alignItems: 'center',
            transition: 'color 0.5s ease'
          }}
        >
          <div className="me-2">
            <ShieldLogo size={45} />
          </div>
          <span style={{ color: isScrolled ? '#fff' : '#00ffff', transition: 'color 0.5s ease' }}>
            AEGIS DYNAMICS
          </span>
        </a>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" style={{ color: isScrolled ? '#fff' : '#00ffff', transition: 'color 0.5s ease' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={{ color: isScrolled ? '#fff' : '#00ffff', transition: 'color 0.5s ease' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#solutions" style={{ color: isScrolled ? '#fff' : '#00ffff', transition: 'color 0.5s ease' }}>Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#insights" style={{ color: isScrolled ? '#fff' : '#00ffff', transition: 'color 0.5s ease' }}>Insights</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ color: isScrolled ? '#fff' : '#00ffff', transition: 'color 0.5s ease' }}>Contact</a>
            </li>
            <li className="nav-item">
              <button 
                className="btn btn-outline-light btn-sm ms-2" 
                style={{ 
                  color: isScrolled ? '#fff' : '#00ffff', 
                  borderColor: isScrolled ? '#fff' : '#00ffff', 
                  transition: 'color 0.5s ease, border-color 0.5s ease' 
                }}
              >
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;