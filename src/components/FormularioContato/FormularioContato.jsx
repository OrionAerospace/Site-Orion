import "./FormularioContato.css";
import { FiSend } from "react-icons/fi";

export default function FormularioContato() {
  return (
    <form className="contact-form">

      <div className="contact-form__row">

        <div className="contact-form__group">
          <label>Nome completo</label>

          <input
            type="text"
            placeholder="Seu nome"
          />
        </div>

        <div className="contact-form__group">
          <label>E-mail</label>

          <input
            type="email"
            placeholder="seu@email.com"
          />
        </div>

      </div>

      <div className="contact-form__group">
        <label>Assunto</label>

        <select onChange={(e) => e.target.blur()}>
          <option>
            Selecione um assunto
          </option>

          <option>Patrocínio</option>
          <option>Equipe</option>
          <option>Dúvidas</option>
        </select>
      </div>

      <div className="contact-form__group">
        <label>Mensagem</label>

        <textarea
          rows="6"
          placeholder="Escreva sua mensagem..."
        />
      </div>

      <button
        type="submit"
        className="contact-form__button"
      >
        <span>Enviar Mensagem</span>
        <FiSend />
      </button>

    </form>
  );
}