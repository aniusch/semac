import React, { useState, useEffect } from "react";
import "./Hero.css";
import logo from "../../../assets/logo_doodle.svg";
import logoMobile from "../../../assets/logo.png";
import arrowDown from "../../../assets/icons/arrow_down.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import linksPaginas from "../../../data/links_paginas";
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
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
            target="_blank"
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