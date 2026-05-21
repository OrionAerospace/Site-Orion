import React from 'react';
import './Hero.css';
import heroRocket from '../../assets/hero-rocket.png'; 

const StatItem = ({ number, label }) => (
  <>
    <div className="stat">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  </>
);

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      {/* Container para a animação de partículas que está no seu script.js */}
      <div className="hero-particles" id="heroParticles"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          LASC 2025 — Competição Nacional
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">ORION</span>
          <span className="title-line title-accent">Aerospace design</span>
        </h1>
        
        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fermentum lorem. 
          Ut eu neque a lectus interdum auctor. Nunc non tincidunt felis.
        </p>
        
        <div className="hero-ctas">
          <a href="#contato" className="btn btn-primary btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>
            </svg>
            Seja um Patrocinador
          </a>
          <a href="#processo" className="btn btn-outline btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <line x1="20" y1="8" x2="20" y2="14"/>
              <line x1="23" y1="11" x2="17" y2="11"/>
            </svg>
            Participe da Equipe
          </a>
        </div>
        
        <div className="hero-stats">
          <StatItem number="50 +" label="Membros" />
          <div className="stat-divider"></div>
          
          <StatItem number="5" label="Áreas técnicas" />
          <div className="stat-divider"></div>
          
          <StatItem number="3" label="Competições" />
          <div className="stat-divider"></div>
          
          <StatItem number="2" label="Foguetes lançados" />
        </div>
      </div>
      
      <a href="#sobre" className="scroll-indicator" aria-label="Rolar para baixo">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;