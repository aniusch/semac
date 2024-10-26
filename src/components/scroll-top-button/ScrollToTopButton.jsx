import React, { useState, useEffect } from "react";
import './ScrollToTopButton.css';


/**
 * Componente ScrollToTopButton exibe um botão flutuante para rolar a página suavemente até uma seção específica.
 * O botão só é visível quando o usuário rola a página para além da seção alvo.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.heroId - ID do elemento (seção) para o qual a página deve rolar quando o botão for clicado.
 * 
 * @example
 * // Exemplo de uso com um elemento de ID "hero-section"
 * <ScrollToTopButton heroId="hero-section" />
 *
 * @returns {JSX.Element} Botão de rolagem para o topo, visível quando o usuário rola a página para baixo.
 */
const ScrollToTopButton = ({ heroId }) => {
  const [showButton, setShowButton] = useState(false);

  const scrollToHero = () => {
    const heroSection = document.getElementById(heroId);
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const heroSection = document.getElementById(heroId);
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setShowButton(rect.bottom < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroId]);

  return (
    <button
      className={`floating-button ${showButton ? 'show' : ''}`}
      onClick={scrollToHero}
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;