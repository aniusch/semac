import React from "react";
import "./Accordion.css";
import arrowdown from "../../assets/icons/arrow_down_faq.svg";

const Accordion = ({ icon, title, content, isOpen, onToggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-title" onClick={onToggle}>
        <div className="accordion-title">
          <img src={icon} className="icone" alt="ícone" />
          <span>{title}</span>
        </div>
        <img
          src={arrowdown}
          alt={isOpen ? "Seta para cima" : "Seta para baixo"}
          className={`arrow-icon ${isOpen ? "rotate" : ""}`}
        />
      </div>
      <div className="accordion-content">{content}</div> {/* Sempre renderizado */}
    </div>
  );
};

export default Accordion;
