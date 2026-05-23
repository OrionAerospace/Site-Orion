import { useState } from "react";
import { FiMonitor, FiSend, FiCode, FiUsers, FiBookOpen } from "react-icons/fi";
import "./Areas.css";

const areas = [
  {
    id: "administrativo",
    number: "01",
    title: "Administrativo",
    subtitle: "Organização, finanças e parcerias",
    description:
      "Responsável pela gestão interna, comunicação com patrocinadores, orçamentos e organização de eventos.",
    activities: [
      "Gestão financeira e patrocínios",
      "Planejamento administrativo",
      "Articulação com instituições e mídia",
    ],
    icon: "📋",
    tabIcon: FiMonitor,
  },
  {
    id: "aerodinamica",
    number: "02",
    title: "Aerodinâmica",
    subtitle: "Performance e estabilidade em voo",
    description:
      "Foca no desenvolvimento de superfícies, perfis e estudos que garantem eficiência e controle aerodinâmico.",
    activities: [
      "Análise de perfis de asa",
      "Simulações CFD",
      "Testes de túnel de vento",
    ],
    icon: "✈️",
    tabIcon: FiSend,
  },
  {
    id: "computacao",
    number: "03",
    title: "Computação",
    subtitle: "Software, dados e automação",
    description:
      "Desenvolve os sistemas de controle, processamento de dados, simulações e ferramentas digitais da equipe.",
    activities: [
      "Desenvolvimento de software embarcado",
      "Análise de dados de voo",
      "Ferramentas de modelagem e visualização",
    ],
    icon: "💻",
    tabIcon: FiCode,
  },
  {
    id: "extensao",
    number: "04",
    title: "Extensão",
    subtitle: "Engajamento e divulgação comunitária",
    description:
      "Atua na comunicação com escolas, eventos e comunidade para expandir o alcance e impacto do projeto.",
    activities: [
      "Eventos educativos",
      "Oficinas de divulgação científica",
      "Campanhas de engajamento social",
    ],
    icon: "🌐",
    tabIcon: FiUsers,
  },
  {
    id: "pesquisa",
    number: "05",
    title: "Pesquisa",
    subtitle: "Inovação e conhecimento científico",
    description:
      "Conduz estudos técnicos e experimentos que avaliam novas tecnologias e aprimoram o desempenho das missões.",
    activities: [
      "Estudos de materiais e processos",
      "Coleta e análise de dados experimentais",
      "Publicações e relatórios técnicos",
    ],
    icon: "🔬",
    tabIcon: FiBookOpen,
  },
];

export default function Areas() {
  const [activeArea, setActiveArea] = useState(areas[0]);

  return (
    <section className="areas section" id="areas">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Áreas Técnicas</span>

          <h2 className="section-title">
            Nossas <span className="text-gradient">Áreas</span>
          </h2>

          <p className="section-desc">
            Cada área é um pilar fundamental para o sucesso de nossas missões.
            Conheça onde a inovação acontece.
          </p>
        </div>

        <div className="areas-tabs">
          {areas.map((area) => {
            const Icon = area.tabIcon;
            return (
              <button
                key={area.id}
                className={`area-tab ${activeArea.id === area.id ? "active" : ""}`}
                onClick={() => setActiveArea(area)}
              >
                <Icon size={24} />
                {area.title}
              </button>
            );
          })}
        </div>

        <div className="area-content">

          {/* INFO */}
          <div className="area-info">
            <span className="area-number">{activeArea.number}</span>

            <h3>{activeArea.title}</h3>

            <p>{activeArea.description}</p>

            <h4>{activeArea.subtitle}</h4>

            <ul className="area-list">
              {activeArea.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="area-card">
            <span className="area-icon">{activeArea.icon}</span>
          </div>

        </div>
      </div>
    </section>
  );
}