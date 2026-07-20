import React from 'react';
import './Navbar.css';
import logoOrion from '../../assets/logo.png';

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <img src={logoOrion} alt="Logo Orion Aerospace Design" className="logo-img" />
        <span>ORION</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#areas">Áreas</a></li>
        <li><a href="#trajetoria">Trajetória</a></li>
        <li><a href="#processo">Processo Seletivo</a></li>
      </ul>
    </nav>
  )
}