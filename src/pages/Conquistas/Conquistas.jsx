import React from 'react';
import './Conquistas.css';

// Array com o histórico para facilitar a manutenção
const conquistasData = [
  {
    id: 1,
    year: '2021',
    badgeLabel: 'Fundação',
    badgeClass: '', // classe padrão
    //title: 'Nasce a Orion',
    //desc: 'Um grupo de 12 estudantes de engenharia une-se com o sonho de construir foguetões. Nasce oficialmente a equipa Orion.',
    isActive: false,
    isHighlight: false,
  },
  {
    id: 2,
    year: '2022',
    badgeLabel: 'Marco técnico',
    badgeClass: '',
    //title: 'Primeiro teste estático',
    //desc: 'Realizámos com sucesso o primeiro teste estático de motor. A equipa cresce para 30 membros e estrutura-se em áreas técnicas.',
    isActive: false,
    isHighlight: false,
  },
  {
    id: 3,
    year: '2023',
    badgeLabel: 'Competição',
    badgeClass: 'badge-gold',
    //title: 'Primeira participação na LASC',
    //desc: 'Estreia na Latin American Space Challenge com o nosso primeiro foguetão, o Orion I. Alcançámos um apogeu de 1.200 metros.',
    isActive: false,
    isHighlight: false,
  },
  {
    id: 4,
    year: '2024',
    badgeLabel: 'Evolução',
    badgeClass: 'badge-gold',
    //title: 'Orion II — Novo recorde',
    //desc: 'Lançamento do Orion II com sistema de telemetria desenvolvido internamente. Novo recorde de apogeu: 2.500 metros. Top 10 na LASC 2024.',
    isActive: false,
    isHighlight: false,
  },
  {
    id: 5,
    year: '2025',
    badgeLabel: 'Atual',
    badgeClass: 'badge-accent',
    //title: 'Rumo à LASC 2025',
    //desc: 'Desenvolvimento do Orion III — o nosso foguetão mais ambicioso, com sistema de recuperação dupla e aviónica avançada. Meta: pódio na LASC 2025.',
    isActive: true, // Pinta a bolinha na linha do tempo
    isHighlight: true, // Destaca o cartão atual
  }
];

export default function Conquistas() {
  return (
    <section id="conquistas" className="section conquistas">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trajetória</span>
          <h2 className="section-title">Nossas <span className="text-gradient">Conquistas</span></h2>
          <p className="section-desc">
            Uma linha do tempo de superação, aprendizagem e voos cada vez mais altos.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>

          {conquistasData.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className={`timeline-dot ${item.isActive ? 'active' : ''}`}>
                <span className="timeline-year">{item.year}</span>
              </div>
              
              <div className={`timeline-card ${item.isHighlight ? 'timeline-card-highlight' : ''}`}>
                <div className="timeline-card-header">
                  <span className={`timeline-badge ${item.badgeClass}`}>
                    {item.badgeLabel}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}