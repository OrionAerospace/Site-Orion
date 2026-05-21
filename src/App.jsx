import React from 'react';
import Conquistas from './pages/Conquistas';
import Processo from './pages/Processo';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Sobre from './pages/Sobre';
import Areas from './pages/Areas';
import Contato from './pages/Contato/Contato';

export default function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Sobre />

      <Areas />

      <Conquistas />

      <Processo />

      <Contato /> 

      <footer>
        {/* footer conteúdo aqui */}
      </footer>

    </div>
  );
}