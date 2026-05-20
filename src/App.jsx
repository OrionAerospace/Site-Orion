import React from 'react';
import Conquistas from './pages/Conquistas';
import Processo from './pages/Processo';

export default function App() {
  return (
    <div className="app">

      <nav id="navbar">
        {/* navbar conteúdo aqui */}
      </nav>

      <section id="home">
        {/* hero conteúdo aqui */}
      </section>

      <section id="sobre">
        {/* sobre conteúdo aqui */}
      </section>

      <section id="areas">
        {/* áreas conteúdo aqui */}
      </section>

      <section id="conquistas">
        <Conquistas />
      </section>

      <section id="processo">
        <Processo />
      </section>

      <section id="contato">
        {/* contato conteúdo aqui */}
      </section>

      <footer>
        {/* footer conteúdo aqui */}
      </footer>

    </div>
  );
}