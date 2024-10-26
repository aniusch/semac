import React, { useState, useEffect } from "react";
import "./Hero.css";
import logo from "../../../assets/logo_doodle.svg";
import logoMobile from "../../../assets/logo.png";
import arrowDown from "../../../assets/icons/arrow_down.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import linksPaginas from "../../../data/links_paginas";
import { HashLink } from 'react-router-hash-link';

/**
 * Componente Hero que exibe a seção inicial da página principal da SEMAC.
 * Contém um logotipo adaptado para desktop e mobile, menu de navegação, chamada para a 3ª edição do evento e um botão de rolagem suave para a seção "Sobre o Evento".
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <Hero />
 *
 * @returns {JSX.Element} Seção inicial da página principal da SEMAC, com menu, logotipo e link para a 3ª edição do evento.
 */
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /**
   * Alterna a visibilidade do menu de navegação em dispositivos móveis.
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /**
   * Rola suavemente até uma seção específica da página.
   *
   * @param {string} id - ID do elemento alvo da rolagem.
   */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    /**
     * Ajusta o estado `isMobile` com base na largura da janela para alternar entre o logotipo mobile e desktop.
     */
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero" id="hero">
      <nav className="navbar">
        <button className="menu-button" onClick={toggleMenu}>
          <Bars3Icon className="menu-icon" />
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          {linksPaginas.homePageLinks.map((link) => (
            <li key={link.href}>
              <HashLink smooth to={link.href}>{link.text}</HashLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hero-content">
        <img
          src={isMobile ? logoMobile : logo}
          alt="SEMAC Logo"
          className="main-logo"
        />
        <p className="hero-subtitle">
          Nosso encontro anual para criar, conectar e transformar.
        </p>
        <div className="terceira-edicao-container">
          <div className="terceira-edicao-text-wrapper">
            <div className="terceira-edicao-text">09 à 13 de Dezembro</div>
          </div>
          <Link
            to={"/terceira-edicao"}
            className="terceira-edicao-btn"
          >
           Saiba mais sobre a 3ª Edição ➔
          </Link>
        </div>
      </div>
      <div className="arrow-down" onClick={() => scrollToSection("sobre-evento")}>
        <img src={arrowDown} alt="Arrow Down" />
      </div>
    </div>
  );
};

export default Hero;
