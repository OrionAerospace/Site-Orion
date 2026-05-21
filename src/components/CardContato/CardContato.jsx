import "./CardContato.css";

import {
  FaEnvelope,
  FaUsers,
  FaRocket
} from "react-icons/fa";

export default function CardContato({
  title,
  value,
  type
}) {

  const icons = {
    email: <FaEnvelope />,
    patrocinio: <FaRocket />,
    processo: <FaUsers />
  };

  return (
    <div className="info-card">
      <div className="info-card__icon">
        {icons[type]}
      </div>

      <div className="info-card__content">
        <h4 className="info-card__title">
          {title}
        </h4>

        <a
          href="#"
          className="info-card__value"
        >
          {value}
        </a>
      </div>
    </div>
  );
}