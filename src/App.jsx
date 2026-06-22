import React from 'react';
import Trajetoria from './pages/Trajetoria/Trajetoria';
import Processo from './pages/Processo/Processo';
import Hero from './pages/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Sobre from './pages/Sobre/Sobre';
import Areas from './pages/Areas/Areas';
import Contato from './pages/Contato/Contato';

export default function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Sobre />

      <Areas />

      <Trajetoria />

      <Processo />

      <Contato /> 

      <footer>
        {/* footer conteúdo aqui */}
      </footer>

    </div>
  );
}