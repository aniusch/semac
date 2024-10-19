import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/animation.json";
import "./HeroTerceiraEdicao.css";
import linksPaginas from "../../../data/links_paginas";
import logo from "../../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeroTerceiraEdicao = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero-terceira" id="hero-terceira">
      <nav className="nav-bar-terceira">
        <a href={"/"} target="_blank" className="botao-para-home">
          {" "}
          <img alt="SEMAC Logo" src={logo} />{" "}
        </a>
        <button className="nav-menu-button" onClick={toggleMenu}>
          <Bars3Icon className="nav-menu-icon" />
        </button>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {linksPaginas.thirdEditionPageLinks.map((link) => (
            <li key={link.href}>
              <HashLink smooth to={link.href}>
                {link.text}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <section className="conteudo-hero-terceira">
        <p className="chamada-hero">A FAENG-UFMT APRESENTA</p>
        <h1 className="heading-hero">
          III Semana das Engenharias de Automoção e Computação
        </h1>
        <p className="paragrafo-hero">
          Explore as últimas tendências em automação e computação com
          especialistas, workshops práticos e oportunidades de networking.
          Garanta sua vaga e esteja à frente das inovações tecnológicas!
        </p>
        <div className="box-botoes">
          <div className="botao-data-evento">
            <div className="botao-data-evento-text">09 à 13 de Dezembro</div>
          </div>

          <Link
            to={"https://eventosacademicos.ufmt.br/index.php/semac/"}
            target="_blank"
            className="botao-inscricao"
          >
            Inscreva-se ➔
          </Link>
        </div>
      </section>
      <div className="lottie-gif-hero">
        <Lottie
          className="gif-semac-terceira"
          animationData={animation}
          loop={true}
        />
      </div>
    </div>
  );
};

export default HeroTerceiraEdicao;
