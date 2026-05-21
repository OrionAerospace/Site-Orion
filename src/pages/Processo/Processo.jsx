import React from 'react';
import './Processo.css';

// Dados estruturados para facilitar a manutenção
const etapasProcesso = [
  { id: 1, titulo: 'Inscrição Online', desc: 'Preenchimento do formulário com os seus dados e área de interesse.' },
  { id: 2, titulo: 'Dinâmica em Grupo', desc: 'Resolução de um desafio prático em equipa para avaliarmos a colaboração.' },
  { id: 3, titulo: 'Entrevista Individual', desc: 'Conversa para conhecermos melhor o seu perfil, motivações e alinhamento.' },
  { id: 4, titulo: 'Período de Capacitação', desc: 'Treino intensivo para aprender as bases necessárias para a sua área.' }
];

const datasImportantes = [
  { label: 'Inscrições', data: 'A definir' },
  { label: 'Dinâmica', data: 'A definir' },
  { label: 'Entrevistas', data: 'A definir' },
  { label: 'Resultado', data: 'A definir' }
];

const preRequisitos = [
  'Estar matriculado num curso de graduação da universidade.',
  'Ter disponibilidade de 10h a 12h semanais para o projeto.',
  'Vontade de aprender e trabalhar em equipa.',
  'Não é exigida experiência prévia na área técnica.'
];

export default function Processo() {
  return (
    <section id="processo" className="section processo">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Faça parte</span>
          <h2 className="section-title">Processo <span className="text-gradient">Seletivo</span></h2>
          <p className="section-desc">
            Quer fazer parte de uma equipa que transforma sonhos em engenharia real? 
            O seu lugar é aqui.
          </p>
        </div>

        <div className="processo-grid">
          <div className="processo-info">
            <div className="processo-steps">
              {etapasProcesso.map((etapa) => (
                <div className="processo-step" key={etapa.id}>
                  <div className="step-number">{etapa.id}</div>
                  <div className="step-content">
                    <h4>{etapa.titulo}</h4>
                    <p>{etapa.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="processo-sidebar">
            <div className="processo-card">
              <div className="processo-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h4>Datas Importantes</h4>
              <ul className="processo-dates">
                {datasImportantes.map((item, index) => (
                  <li key={index}>
                    <span className="date-label">{item.label}</span>
                    <span className="date-value">{item.data}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="processo-card">
              <h4>Pré-requisitos</h4>
              <ul className="processo-requisitos">
                {preRequisitos.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <a href="#contato" className="btn btn-primary btn-block">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              Inscreva-se Agora
            </a>

            <div className="processo-downloads">
              <a href="#" className="download-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Edital do Processo Seletivo (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}