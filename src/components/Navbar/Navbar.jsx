import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoOrion from '../../assets/logo.png';

const LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#processo', label: 'Processo Seletivo' },
];

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuAberto]);

  return (
    <nav id="navbar">
      { }
      <button
        className={`hamburger-btn ${menuAberto ? 'active' : ''}`}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
        aria-expanded={menuAberto}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar-logo">
        <img src={logoOrion} alt="Logo Orion Aerospace Design" className="logo-img" />
        <span>ORION</span>
      </div>

      { }
      <div
        className={`navbar-overlay ${menuAberto ? 'active' : ''}`}
        onClick={fecharMenu}
      ></div>

      <ul className={`navbar-links ${menuAberto ? 'active' : ''}`}>
        {LINKS.map((link, index) => (
          <li
            key={link.href}
            style={{ transitionDelay: menuAberto ? `${index * 0.06 + 0.1}s` : '0s' }}
          >
            <a href={link.href} onClick={fecharMenu}>{link.label}</a>
          </li>
        ))}
      </ul>

    </nav>
  )
}