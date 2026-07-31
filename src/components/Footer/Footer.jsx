import React from "react";
import OrionLogo from "../../assets/logo.png";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const LINKS = [
    { label: "Home",              href: "#home"       },
    { label: "Sobre",             href: "#sobre"      },
    { label: "Áreas",             href: "#areas"      },
    { label: "Conquistas",        href: "#conquistas" },
    { label: "Processo Seletivo", href: "#processo"   }
];

const SOCIALS = [
    {
        icon:     <FaInstagram />,
        platform: "Instagram",
        href:     "https://www.instagram.com/orion.aerospace/",
        handle:   "@orion.aerospace"
    },
    {
        icon:     <FaLinkedin />,
        platform: "LinkedIn",
        href:     "https://www.linkedin.com/company/orion-aerospace-design/",
        handle:   "Orion Aerospace Design"
    },
    {
        icon:     <FaGithub />,
        platform: "GitHub",
        href:     "https://github.com/OrionAerospace",
        handle:   "OrionAerospace"
    },
    {
        icon:     <FaEnvelope />,
        platform: "E-mail",
        href:     "mailto:contato@orionaerospace.org",
        handle:   "contato@orionaerospace.org"
    }
];

export default function Footer() {
    return (
        <footer className="orion-footer">
            <div className="footer-inner">

                {/* — Área principal: marca + contato — */}
                <div className="footer-grid">

                    {/* Coluna esquerda — marca */}
                    <div className="footer-brand-col">
                        <div className="brand-header">
                            <img
                                src={OrionLogo}
                                alt="Orion Aerospace Design"
                                className="brand-logo"
                            />
                            <div>
                                <h3 className="brand-name">Orion Aerospace Design</h3>
                                <p className="brand-institution">
                                    UTFPR — Ponta Grossa
                                </p>
                            </div>
                        </div>

                        <p className="brand-desc">
                            Transformando conhecimento em tecnologia aeroespacial através da pesquisa, 
                            inovação e projetos desenvolvidos por estudantes da UTFPR-PG.
                        </p>
                    </div>

                    {/* Divisor vertical */}
                    <div className="footer-divider-v" />

                    {/* Coluna direita — redes e contato */}
                    <div className="footer-contact-col">
                        <p className="contact-label">Redes &amp; Contato</p>

                        <div className="social-grid">
                            {SOCIALS.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    className="social-row"
                                >
                                    <span className="social-icon-wrap">
                                        {s.icon}
                                    </span>
                                    <span className="social-info">
                                        <span className="social-platform">{s.platform}</span>
                                        <span className="social-handle">{s.handle}</span>
                                    </span>
                                    <span className="social-arrow">→</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* — Rodapé inferior: nav + copyright — */}
                <div className="footer-bottom-bar">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Orion Aerospace Design
                        &nbsp;·&nbsp; Todos os direitos reservados
                    </p>

                </div>

            </div>
        </footer>
    );
}