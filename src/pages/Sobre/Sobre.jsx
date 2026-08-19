import './Sobre.css';
import foguete from '../../assets/hero-rocket.png';


export default function Sobre() {
  return (
    <section id="sobre" className="section sobre">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Quem Somos</span>
          <h2 className="section-title">Sobre a Orion</h2>
          <p className="section-desc">Entre nossas frentes de atuação estão o
projeto e lançamento de minifoguetes e nanossatélites, além de pesquisas em
astrobiologia e ações educacionais de extensão.</p>
        </div>

        <div className="sobre-content">
          <div className="sobre-texto">
            <h3>Nossa Historia</h3>
            <p>• Nascemos no dia 10 de maio de 2020, em meio à pandemia, idealizados
por Gustavo Trudes.</p>
            <p>• O que começou como um sonho virtual transformou-se em um sólido
projeto de Extensão e Competição da UTFPR-PG.</p>
            <p>• De nossas primeiras participações online até nos tornarmos uma equipe
presencial em dezembro de 2021, nossa história é marcada por superação,
união entre ciência e comunidade, e a busca constante por voos cada vez
mais altos.</p>

            <h3>Trajetorias e Conquistas</h3>
            <p>• Nossa evolução é definida por marcos contínuos de superação.</p>
            <p>• Acumulamos um histórico de sucesso que inclui lançamentos na Latin
American Space Challenge (LASC), pódios em competições de
minifoguetes e o 2o lugar no CubeDesign - CubeSat.</p>
            <p>• Realizamos também múltiplos lançamentos bem-sucedidos de sondas de
pesquisa, como a CápsulaUp.</p>
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
            <p>Desenvolver tecnologias aeroespaciais inovadoras e de aproximar
a ciência da comunidade.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h4>Visao</h4>
            <p>Consolidar-se como uma referência em inovação e
multidisciplinaridade , formando profissionais altamente qualificados e
investindo no futuro de estudantes em formação.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h4>Valores</h4>
            <p>Inovação, multidisciplinaridade, responsabilidade social e
inspiração.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
