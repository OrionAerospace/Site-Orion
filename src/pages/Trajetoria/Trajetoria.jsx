import React, { useState } from 'react';
import './Trajetoria.css';

// Array com o histórico oficial da Orion
const trajetoriaData = [
  {
    id: 1,
    year: '2020',
    badgeLabel: 'Fundação',
    badgeClass: '', 
    title: 'Onde tudo começou',
    desc: 'Fundação da equipe em maio de 2020 e estreia com o 3º lugar na LASC (virtual) em setembro. Em novembro, garantimos o 4º lugar no CubeDesign - CubeSat (virtual).',
  },
  {
    id: 2,
    year: '2021',
    badgeLabel: '1ª Cápsula UP!',
    badgeClass: '',
    title: 'Primeiras conquistas',
    desc: 'Sob liderança de Calandra Tilpe, conquistamos o 1º lugar em DataScience e 3º em CubeSat. Demos um passo histórico ao nos tornarmos um projeto presencial, celebrado com o lançamento da 1ª Cápsula UP!.',
  },
  {
    id: 3,
    year: '2022',
    badgeLabel: 'OrionDays',
    badgeClass: '',
    title: 'Crescendo e impactando',
    desc: 'Sob a capitania de Bruna Nizer, realizamos a 1ª edição do OrionDays, um evento que uniu ciência, tecnologia e comunidade, e se tornou marca registrada da Orion!. Conquistamos também o 2º lugar no CubeDesign - CubeSat.',
  },
  {
    id: 4,
    year: '2023',
    badgeLabel: 'Odyssey',
    badgeClass: 'badge-gold',
    title: 'Um novo patamar',
    desc: 'Sob a liderança de Arthur Andrioli, a Orion deu um passo fundamental: a abertura do CNPJ, formalizando o projeto. Lançamos nosso primeiro foguete, o Odyssey, e alcançamos o 9º lugar na categoria 3km da LASC.',
  },
  {
    id: 5,
    year: '2024',
    badgeLabel: '2ª Cápsula UP',
    badgeClass: 'badge-gold',
    title: 'Novas oportunidades',
    desc: 'Com Mariana Cabrinha e Isabelle Distler na capitania, lançamos a 2ª Cápsula UP, mostrando nossa evolução técnica. Também realizamos mais uma edição inesquecível do OrionDays, consolidando nosso papel na região e reforçando o impacto do projeto!.',
  },
  {
    id: 6,
    year: '2025',
    badgeLabel: 'Atual',
    badgeClass: 'badge-accent',
    title: 'Foguete não tem ré',
    desc: 'Sob a capitania de Eduardo de Lima e Djeison Oppelt, seguimos com dedicação e esforço para levar a ciência mais perto da comunidade. Alcançamos a marca do 6º lugar na categoria 3k na LASC.',
  }
];

export default function Trajetoria() {
  // Estado para controlar qual ano está selecionado
  const [activeYear, setActiveYear] = useState('2020');

  // Encontra os dados do ano que está ativo no momento
  const activeItem = trajetoriaData.find(item => item.year === activeYear);

  return (
    <section id="trajetoria" className="section conquistas">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Histórico</span>
          
          <h2 className="section-title">Nossa Trajetória</h2>
          <p className="section-desc">
            Uma linha do tempo de superação, aprendizagem e voos cada vez mais altos.
          </p>

        </div>

        {/* Abas dos Anos */}
        <div className="trajetoria-tabs">
          {trajetoriaData.map((item) => (
            <button
              key={item.id}
              className={`trajetoria-tab ${activeYear === item.year ? 'active' : ''}`}
              onClick={() => setActiveYear(item.year)}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* Conteúdo Dinâmico do Ano Selecionado */}
        <div className="trajetoria-content">

          {/* 1º - Mascote (esquerda) */}
          <div className="trajetoria-mascote">
            <div className="image-placeholder">
              <span>Mascote da Orion</span>
            </div>
          </div>

          {/* 2º - Foto do ano selecionado (meio) */}
          <div className="trajetoria-foto">
            <div className="image-placeholder">
              <span>Foto {activeItem.year}</span>
            </div>
          </div>

          {/* 3º - Card com o texto do ano (direita) */}
          <div className="timeline-card timeline-card-highlight">
            <div className="timeline-card-header">
              <span className={`timeline-badge ${activeItem.badgeClass}`}>
                {activeItem.badgeLabel}
              </span>
            </div>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}