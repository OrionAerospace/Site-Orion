import "./RedesSociais.css";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

export default function RedesSociais() {
  return (
    <div className="social-links">

      <h4 className="social-links__title">
        Redes Sociais
      </h4>

      <div className="social-links__icons">

        <a
          className="social-links__icon"
          href="https://www.instagram.com/orion.aerospace/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={24}/>
        </a>

        <a
          className="social-links__icon"
          href="https://www.linkedin.com/company/orion-aerospace-design"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={24}/>
        </a>

        <a
          className="social-links__icon"
          href="https://github.com/OrionAerospace"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={24}/>
        </a>

      </div>
    </div>
  );
}