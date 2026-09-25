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


// Icone administrativo
import { FaUserGear } from "react-icons/fa6";
// Icone aerodinamica
import { IoIosRocket } from "react-icons/io";
// Icone computacao
import { FaCode } from "react-icons/fa";
// Icone de extensao
import { IoIosPeople } from "react-icons/io";
// Icone de pesquisa
import { CiSearch } from "react-icons/ci";

const areas = [
  {
    id: "administrativo",
    title: "Administrativo",
    subtitle: "Comunicação, Financeiro, Eventos, Gente & Gestão e Relações Empresariais",
    description:
      "Garante o funcionamento completo da Orion, administrando desde os recursos e a gestão de pessoas até as questões burocráticas da equipe.",
    activities: [
      "Gestão financeira e patrocínios",
      "Planejamento administrativo",
      "Articulação com instituições e mídia",
    ],
    images: [],
    tabIcon: FaUserGear,
  },
  {
    id: "aerodinamica",
    title: "Aerodinâmica",
    subtitle: "Performance e estabilidade em voo",
    description:
      "Esta área é a responsável pelo desenvolvimento do nosso minifoguete, sendo dividida em quatro gerências.",
    activities: [
      "Estrutura, que projeta o corpo do foguete para assegurar resistência e aerodinâmica",
      "Propulsão, encarregada do motor e do desempenho no lançamento",
      "Aviônica, que desenvolve a eletrônica e os sistemas de controle de voo",
      "Recuperação, que cria e testa os mecanismos para o retorno seguro do foguete", 
    ],
    images: [aero1, aero2, aero3, aero4, aero5],
    tabIcon: IoIosRocket,
  },
  {
    id: "computacao",
    title: "Computação",
    subtitle: "Software, I.A e automação",
    description:
      "A Computação atua no desenvolvimento de softwares, simulações e ferramentas digitais da equipe.",
    activities: [
      "Soluções com inteligência artificial",
      "Dividi-se em Front-end e Back-end",
      "Ferramentas de modelagem e visualização",
    ],
    images: [],
    tabIcon: FaCode,
  },
  {
    id: "extensao",
    title: "Extensão",
    subtitle: "Engajamento e divulgação comunitária",
    description:
      "Temos como missão compartilhar o saber científico produzido internamente e despertar em crianças e adolescentes a curiosidade pela graduação e pela ciência.",
    activities: [
      "Fazem do aprendizado algo inspirador e ao alcance de todos.",
      "Oficinas hands-on e minicursos",
      "Conecta a pesquisa ao público",
    ],
    images: [ext1, ext2, ext3, ext4],
    tabIcon: IoIosPeople,
  },
  {
    id: "pesquisa",
    title: "Pesquisa",
    subtitle: "Inovação e conhecimento científico",
    description:
      "Conduzimos pesquisas, análises e experimentos dedicados ao avanço de técnicas e à criação de novos conhecimentos.",
    activities: [
      "Astrobiologia",
      "Coleta e análise de dados experimentais",
      "Energia Sustentável",
    ],
    images: [pesq1, pesq2, pesq3, pesq4],
    tabIcon: CiSearch,
  },
];

export default function Areas() {
  const [activeAreaId, setActiveAreaId] = useState(areas[0].id);
  const activeArea = areas.find(area => area.id === activeAreaId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Controlar a transição de imagens
  useEffect(() => {
    setCurrentImageIndex(0);

    if (!activeArea.images?.length) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        (prev + 1) % activeArea.images.length
      );
    }, 2800);

    return () => clearInterval(interval);
  }, [activeAreaId]);

  return (
    <section className="areas section" id="areas">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Áreas Técnicas</span>

          <h2 className="section-title">
            Nossas Áreas
          </h2>

          <p className="section-desc">
            Cada área é um pilar fundamental para o sucesso de nossas missões.
            Conheça onde a inovação acontece.
          </p>
        </div>

        <div className="areas-tabs" role="tablist" aria-label="Áreas técnicas">
          {areas.map((area) => {
            const Icon = area.tabIcon;
            return (
              <button
                key={area.id}
                type="button"
                role="tab"
                aria-selected={activeArea.id === area.id}
                className={`area-tab ${activeArea.id === area.id ? "active" : ""}`}
                onClick={() => setActiveAreaId(area.id)}
              >
                <Icon size={24} aria-hidden="true" />
                <span className="tab-label">{area.title}</span>
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
              <>
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
                <div className="area-image-dots">
                  {activeArea.images.map((_, index) => (
                    <div
                      key={index}
                      className={`area-image-dot ${index === currentImageIndex ? "active" : ""}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="area-icon-placeholder">{activeArea.icon}</div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}