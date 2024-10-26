import "./HeroEdicoesAnteriores.css";
import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/animation.json";
import linksPaginas from "../../../data/links_paginas";
import logo from "../../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

/**
 * Componente HeroEdicoesAnteriores que exibe o cabeçalho da página de edições anteriores,
 * incluindo a navegação, animação e um título com descrição.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <HeroEdicoesAnteriores />
 *
 * @returns {JSX.Element} Cabeçalho da página de edições anteriores, com animação, navegação e informações introdutórias.
 */
const HeroEdicoesAnteriores = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Alterna a visibilidade do menu de navegação em dispositivos móveis.
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="hero-previous-editions" className="hero-previous-editions">
      <nav className="navbar-previous">
        <Link to="/" className="nav-home-button">
          <img alt="SEMAC Logo" src={logo} />
        </Link>
        <button className="nav-menu-button" onClick={toggleMenu}>
          <Bars3Icon className="nav-menu-icon" />
        </button>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {linksPaginas.previousEditionsPageLinks.map((link, index) => (
            <HashLink key={index} smooth to={link.href}>
              {link.text}
            </HashLink>
          ))}
        </ul>
      </nav>
      <section className="hero-content">
        <h1 className="hero-heading">Eventos Anteriores</h1>
        <p className="hero-paragraph">
          Que tal relembrar as edições anteriores da SEMAC? Confira fotos,
          histórias e tudo o que rolou nos eventos passados!
        </p>
      </section>
      <div className="lottie-animation">
        <Lottie
          className="animation-previous"
          animationData={animation}
          loop={true}
        />
      </div>
    </div>
  );
};

export default HeroEdicoesAnteriores;
