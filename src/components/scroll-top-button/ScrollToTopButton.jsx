import React, { useState, useEffect } from "react";
import './ScrollToTopButton.css';

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