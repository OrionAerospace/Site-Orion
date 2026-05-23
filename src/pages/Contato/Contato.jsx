import "./Contato.css";

import FormularioContato from "../../components/FormularioContato/FormularioContato";
import CardContato from "../../components/CardContato/CardContato";
import RedesSociais from "../../components/RedesSociais/RedesSociais";

export default function Contato() {
  return (
    <section
      id="contato"
      className="contato section"
    >
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Fale conosco
          </span>

          <h2 className="section-title">
            Entre em{" "}

            <span className="text-gradient">
              Contato
            </span>
          </h2>

          <p className="section-desc">
            Tem interesse em nos patrocinar,
            participar da equipe ou simplesmente
            quer saber mais sobre o projeto?
            Adoraríamos ouvir você
          </p>
        </div>

        <div className="contato-grid">

          <FormularioContato />

          <div className="contato-info">

            <CardContato
              title="E-mail Geral"
              value="contato@orion.com"
              type="email"
            />

            <CardContato
              title="Patrocínio"
              value="patrocinio@orion.com"
              type="patrocinio"
            />

            <CardContato
              title="Processo Seletivo"
              value="processo@orion.com"
              type="processo"
            />

            <RedesSociais />

          </div>
        </div>
      </div>
    </section>
  );
}