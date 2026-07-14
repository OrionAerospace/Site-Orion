import React from 'react';
import './Processo.css';

// Dados estruturados para facilitar a manutenção
const etapasProcesso = [
  { id: 1, titulo: 'Inscrição Online', desc: 'Preenchimento do formulário com os seus dados e área de interesse.' },
  { id: 2, titulo: 'Dinâmica em Grupo', desc: 'Resolução de um desafio prático em equipa para avaliarmos a colaboração.' },
  { id: 3, titulo: 'Entrevista Individual', desc: 'Conversa para conhecermos melhor o seu perfil, motivações e alinhamento.' },
  { id: 4, titulo: 'Período de Capacitação', desc: 'Treino intensivo para aprender as bases necessárias para a sua área.' }
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
            {/* O card de Datas Importantes, o botão de Inscrição e o Edital foram removidos */}
            
            <div className="processo-card">
              <h4>Pré-requisitos</h4>
              <ul className="processo-requisitos">
                {preRequisitos.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}