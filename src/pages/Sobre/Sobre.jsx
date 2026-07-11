import './Sobre.css';
import foguete from '../../assets/foguete.jpg';

export default function Sobre() {
  return (
    <section id="sobre" className="section sobre">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Quem Somos</span>
          <h2 className="section-title">Sobre a <span className="text-gradient">Orion</span></h2>
          <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fermentum lorem.</p>
        </div>

        <div className="sobre-content">
          <div className="sobre-texto">
            <h3>Nossa Historia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fermentum lorem. Ut eu neque a lectus interdum auctor. Nunc non tincidunt felis.</p>

            <h3>Trajetorias e Conquistas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fermentum lorem. Ut eu neque a lectus interdum auctor. Nunc non tincidunt felis.</p>
          </div>

          <div className="sobre-imagem">
            <img src={foguete} alt="Foguete Orion" />
          </div>
        </div>

        <div className="sobre-cards">

          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
              </svg>
            </div>
            <h4>Missao</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fermentum lorem.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h4>Visao</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fermentum lorem.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h4>Valores</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fermentum lorem.</p>
          </div>

        </div>
      </div>
    </section>
  );
}