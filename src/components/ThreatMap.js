import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreatMap = () => {
  const [threats, setThreats] = useState([]);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const globeRef = useRef(null);
  const threatPointsRef = useRef([]);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create globe
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create custom shader material for the globe
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    
    const fragmentShader = `
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        
        // Create grid pattern
        float grid = abs(sin(vPosition.x * 20.0)) * abs(sin(vPosition.y * 20.0)) * abs(sin(vPosition.z * 20.0));
        grid = smoothstep(0.0, 0.1, grid);
        
        // Animated pulse effect
        float pulse = sin(time * 2.0) * 0.5 + 0.5;
        
        vec3 glow = vec3(0.0, 1.0, 1.0) * intensity;
        vec3 gridColor = vec3(0.0, 0.8, 1.0) * grid * 0.3;
        
        gl_FragColor = vec4(glow + gridColor, 0.6 + pulse * 0.2);
      }
    `;
    
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
      side: THREE.DoubleSide
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    globeRef.current = globe;

    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(2.2, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Position camera
    camera.position.z = 6;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.005;
        globeRef.current.material.uniforms.time.value = Date.now() * 0.001;
      }
      
      // Update threat points
      threatPointsRef.current.forEach((point, index) => {
        if (point) {
          point.scale.setScalar(Math.sin(Date.now() * 0.01 + index) * 0.5 + 1);
        }
      });
      
      renderer.render(scene, camera);
    };
    animate();

    sceneRef.current = { scene, camera, renderer };

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update threat points in 3D space
  useEffect(() => {
    if (!sceneRef.current) return;

    // Clear existing threat points
    threatPointsRef.current.forEach(point => {
      if (point) sceneRef.current.scene.remove(point);
    });
    threatPointsRef.current = [];

    // Add new threat points
    threats.forEach((threat, index) => {
      const phi = (threat.y / 100) * Math.PI;
      const theta = (threat.x / 100) * Math.PI * 2;
      
      const x = 2.1 * Math.sin(phi) * Math.cos(theta);
      const y = 2.1 * Math.cos(phi);
      const z = 2.1 * Math.sin(phi) * Math.sin(theta);

      const geometry = new THREE.SphereGeometry(0.05, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: threat.type === 'detected' ? 0xff4444 : 0x00ffff,
        transparent: true,
        opacity: 0.8
      });
      
      const point = new THREE.Mesh(geometry, material);
      point.position.set(x, y, z);
      
      sceneRef.current.scene.add(point);
      threatPointsRef.current.push(point);
    });
  }, [threats]);

  useEffect(() => {
    const generateThreat = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: Math.random() > 0.5 ? 'detected' : 'neutralized',
      timestamp: Date.now()
    });

    const interval = setInterval(() => {
      setThreats(prev => {
        const newThreats = [...prev, generateThreat()];
        // Keep only last 30 threats for performance
        return newThreats.slice(-30);
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const stats = {
    detected: threats.filter(t => t.type === 'detected').length,
    neutralized: threats.filter(t => t.type === 'neutralized').length,
    total: threats.length
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white mb-4" style={{ opacity: 0.9 }}>
            Global <span style={{ color: '#00ffff' }}>Threat Intelligence</span>
          </h2>
          <p className="lead text-light" style={{ opacity: 0.9 }}>
            Real-time 3D visualization of our AI-powered threat detection network
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative p-4 rounded-3 border border-cyan d-flex justify-content-center align-items-center" style={{
              background: 'rgba(0, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(0, 255, 255, 0.3) !important',
              height: '500px',
              overflow: 'hidden'
            }}>
              {/* 3D Globe Container */}
              <div 
                ref={mountRef} 
                className="position-relative"
                style={{ 
                  width: '400px', 
                  height: '400px',
                  filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))'
                }}
              />

              {/* Stats Panel */}
              <div className="position-absolute top-0 end-0 p-3">
                <div className="bg-dark bg-opacity-75 rounded p-3 text-light" style={{
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 255, 255, 0.3)'
                }}>
                  <h6 className="text-info mb-2">Threat Analytics</h6>
                  <div className="small">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Total Threats:</span>
                      <span className="text-warning fw-bold">{stats.total}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span>Detected:</span>
                      <span className="text-danger fw-bold">{stats.detected}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Neutralized:</span>
                      <span className="text-info fw-bold">{stats.neutralized}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="position-absolute bottom-0 start-0 p-3">
                <div className="d-flex align-items-center text-light">
                  <div className="d-flex align-items-center me-4">
                    <div className="bg-danger rounded-circle me-2" style={{ 
                      width: '10px', 
                      height: '10px',
                      boxShadow: '0 0 8px #ff4444'
                    }}></div>
                    <small>Threats Detected</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle me-2" style={{ 
                      width: '10px', 
                      height: '10px', 
                      backgroundColor: '#00ffff',
                      boxShadow: '0 0 8px #00ffff'
                    }}></div>
                    <small>Threats Neutralized</small>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="position-absolute top-0 start-0 p-3">
                <div className="d-flex align-items-center text-success">
                  <div className="rounded-circle me-2" style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#00ff00',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <small>System Online</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="text-center p-3 rounded" style={{
              background: 'rgba(255, 68, 68, 0.1)',
              border: '1px solid rgba(255, 68, 68, 0.3)'
            }}>
              <h5 className="text-danger">Active Monitoring</h5>
              <p className="text-light small mb-0">24/7 global surveillance network</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-3 rounded" style={{
              background: 'rgba(0, 255, 255, 0.1)',
              border: '1px solid rgba(0, 255, 255, 0.3)'
            }}>
              <h5 className="text-info">AI-Powered</h5>
              <p className="text-light small mb-0">Machine learning threat detection</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-3 rounded" style={{
              background: 'rgba(0, 255, 0, 0.1)',
              border: '1px solid rgba(0, 255, 0, 0.3)'
            }}>
              <h5 className="text-success">Real-time Response</h5>
              <p className="text-light small mb-0">Instant threat neutralization</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ThreatMap;