import React from 'react';
import Conquistas from './pages/Conquistas/Conquistas';
import Processo from './pages/Processo/Processo';
import Hero from './pages/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Sobre from './pages/Sobre/Sobre';
import Areas from './pages/Areas/Areas';
import Contato from './pages/Contato/Contato';
import Footer from './components/Footer/Footer';

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

      <Footer />

    </div>
  );
}