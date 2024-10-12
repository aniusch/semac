import React, { useEffect, useRef } from "react";
import "./Numeros.css";

const Numeros = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animateNumbers = () => {
      const elements = document.querySelectorAll(".animate-number");
      elements.forEach((element) => {
        const start = parseInt(element.getAttribute("data-start"), 10);
        const end = parseInt(element.getAttribute("data-end"), 10);
        const duration = parseInt(element.getAttribute("data-duration"), 10);
        let current = start;
        const increment = (end - start) / (duration * 30);

        const updateNumber = () => {
          current += increment;
          if (current >= end) {
            current = end;
            element.textContent = `+${Math.floor(current)}`;
          } else {
            element.textContent = `+${Math.floor(current)}`;
            requestAnimationFrame(updateNumber);
          }
        };
        updateNumber();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="numeros" ref={sectionRef}>
      <header className="App-header">
        <h1>Onde a Automação e a</h1>
        <h1>
          Computação se <span className="highlight">encontram</span>.
        </h1>
        <hr className="divider" />
        <div className="stats-container">
          <div className="stat-item">
            <h2
              className="animate-number"
              data-start="0"
              data-end="40"
              data-duration="2"
            >
              +0
            </h2>
            <p>Palestrantes</p>
          </div>
          <div className="stat-item">
            <h2
              className="animate-number"
              data-start="0"
              data-end="5"
              data-duration="2"
            >
              +0
            </h2>
            <p>Minicursos</p>
          </div>
          <div className="stat-item">
            <h2
              className="animate-number"
              data-start="0"
              data-end="12"
              data-duration="2"
            >
              +0
            </h2>
            <p>Parceiros</p>
          </div>
          <div className="stat-item">
            <h2
              className="animate-number"
              data-start="0"
              data-end="2"
              data-duration="2"
            >
              +0
            </h2>
            <p>Oficinas</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Numeros;
