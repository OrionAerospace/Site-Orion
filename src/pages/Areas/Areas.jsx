import { useState, useEffect } from "react";
import { FiMonitor, FiSend, FiCode, FiUsers, FiBookOpen } from "react-icons/fi";
import "./Areas.css";

// Importar imagens de Aerodinâmica
import aero1 from "../../assets/fotosAerodinamica/aero1.jpg";
import aero2 from "../../assets/fotosAerodinamica/aero2.jpg";
import aero3 from "../../assets/fotosAerodinamica/aero3.jpg";
import aero4 from "../../assets/fotosAerodinamica/aero4.jpg";
import aero5 from "../../assets/fotosAerodinamica/aero5.jpg";

// Importar imagens de Extensão
import ext1 from "../../assets/fotosExtensao/ext1.jpg";
import ext2 from "../../assets/fotosExtensao/ext2.jpg";
import ext3 from "../../assets/fotosExtensao/ext3.jpg";
import ext4 from "../../assets/fotosExtensao/ext4.JPG";

// Importar imagens de Pesquisa
import pesq1 from "../../assets/fotosPesquisa/pesq1.jpg";
import pesq2 from "../../assets/fotosPesquisa/pesq2.jpg";
import pesq3 from "../../assets/fotosPesquisa/pesq3.jpg";
import pesq4 from "../../assets/fotosPesquisa/pesq4.jpg";

const areas = [
  {
    id: "administrativo",
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
    images: [],
    tabIcon: FiMonitor,
  },
  {
    id: "aerodinamica",
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
    images: [aero1, aero2, aero3, aero4, aero5],
    tabIcon: FiSend,
  },
  {
    id: "computacao",
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
    images: [],
    tabIcon: FiCode,
  },
  {
    id: "extensao",
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
    images: [ext1, ext2, ext3, ext4],
    tabIcon: FiUsers,
  },
  {
    id: "pesquisa",
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
    images: [pesq1, pesq2, pesq3, pesq4],
    tabIcon: FiBookOpen,
  },
];

export default function Areas() {
  const [activeArea, setActiveArea] = useState(areas[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Controlar a transição de imagens
  useEffect(() => {
    // Se a área não tem imagens, não fazer nada
    if (!activeArea.images || activeArea.images.length === 0) {
      return;
    }

    // Resetar o índice da imagem quando muda de área
    setCurrentImageIndex(0);

    // Configurar intervalo para trocar de imagem
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % activeArea.images.length
      );
    }, 4000); // Trocar de imagem a cada 4 segundos

    return () => clearInterval(interval);
  }, [activeArea]);

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

            <h3 className="upper">{activeArea.title}</h3>


            <p>{activeArea.description}</p>

            <h4>{activeArea.subtitle}</h4>

            <ul className="area-list">
              {activeArea.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="area-card">
            {activeArea.images && activeArea.images.length > 0 ? (
              <div className="area-image-container">
                {activeArea.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${activeArea.title} ${index + 1}`}
                    className={`area-image ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            ) : (
              <span className="area-icon">{activeArea.icon}</span>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}