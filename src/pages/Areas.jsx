import React, { useState } from 'react';
import './Areas.css';
import spaceBg from '../assets/space-bg.png';

const areaData = [
  {
    id: 'administrativo',
    number: '01',
    title: 'Administrativo',
    subtitle: 'Organização, finanças e parcerias',
    description:
      'Responsável pela gestão interna, comunicação com patrocinadores, orçamentos e organização de eventos.',
    activities: [
      'Gestão financeira e patrocínios',
      'Planejamento administrativo',
      'Articulação com instituições e mídia',
    ],
    icon: '📋',
    metrics: [
      { value: '10+', label: 'Parcerias' },
      { value: '100%', label: 'Transparência' },
    ],
  },
  {
    id: 'aerodinamica',
    number: '02',
    title: 'Aerodinâmica',
    subtitle: 'Performance e estabilidade em voo',
    description:
      'Foca no desenvolvimento de superfícies, perfis e estudos que garantem eficiência e controle aerodinâmico.',
    activities: [
      'Análise de perfis de asa',
      'Simulações CFD',
      'Testes de túnel de vento',
    ],
    icon: '✈️',
    metrics: [
      { value: '15', label: 'Simulações' },
      { value: '98%', label: 'Precisão' },
    ],
  },
  {
    id: 'computacao',
    number: '03',
    title: 'Computação',
    subtitle: 'Software, dados e automação',
    description:
      'Desenvolve os sistemas de controle, processamento de dados, simulações e ferramentas digitais da equipe.',
    activities: [
      'Desenvolvimento de software embarcado',
      'Análise de dados de voo',
      'Ferramentas de modelagem e visualização',
    ],
    icon: '💻',
    metrics: [
      { value: '24/7', label: 'Monitoramento' },
      { value: '5', label: 'Plataformas' },
    ],
  },
  {
    id: 'extensao',
    number: '04',
    title: 'Extensão',
    subtitle: 'Engajamento e divulgação comunitária',
    description:
      'Atua na comunicação com escolas, eventos e comunidade para expandir o alcance e impacto do projeto.',
    activities: [
      'Eventos educativos',
      'Oficinas de divulgação científica',
      'Campanhas de engajamento social',
    ],
    icon: '🌐',
    metrics: [
      { value: '20+', label: 'Eventos' },
      { value: '500+', label: 'Participantes' },
    ],
  },
  {
    id: 'pesquisa',
    number: '05',
    title: 'Pesquisa',
    subtitle: 'Inovação e conhecimento científico',
    description:
      'Conduz estudos técnicos e experimentos que avaliam novas tecnologias e aprimoram o desempenho das missões.',
    activities: [
      'Estudos de materiais e processos',
      'Coleta e análise de dados experimentais',
      'Publicações e relatórios técnicos',
    ],
    icon: '🔬',
    metrics: [
      { value: '8', label: 'Projetos' },
      { value: '12', label: 'Publicações' },
    ],
  },
];

const Areas = () => {
  const [activeTab, setActiveTab] = useState(areaData[0].id);
  const activeArea = areaData.find((area) => area.id === activeTab) || areaData[0];

  return (
    <section id="areas" className="areas">
      <div className="areas-bg">
        <img src={spaceBg} alt="Fundo espacial" className="areas-bg-img" />
        <div className="areas-overlay"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Áreas Técnicas</span>
          <h2 className="section-title">Explorando nossas especialidades</h2>
          <p className="section-desc">
            Cada área reúne talento, inovação e processo para levar a equipe ORION ao próximo lançamento.
          </p>
        </div>

        <div className="areas-tabs">
          {areaData.map((area) => (
            <button
              key={area.id}
              type="button"
              className={`area-tab ${activeTab === area.id ? 'active' : ''}`}
              onClick={() => setActiveTab(area.id)}
            >
              {area.title}
            </button>
          ))}
        </div>

        <div className="area-panel active">
          <div className="area-panel-grid">
            <div className="area-info">
              <span className="area-number">{activeArea.number}</span>
              <h3>{activeArea.title}</h3>
              <p>{activeArea.description}</p>
              <h4>{activeArea.subtitle}</h4>
              <ul className="area-activities">
                {activeArea.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="area-visual">
              <div className="area-card-visual">
                <div className="area-icon-large">{activeArea.icon}</div>

                <div className="area-metrics">
                  {activeArea.metrics.map((metric) => (
                    <div key={metric.label} className="area-metric">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
