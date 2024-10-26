import React from "react";
import "./Accordion.css";
import arrowdown from "../../assets/icons/arrow_down_faq.svg";

/**
 * Componente Accordion para exibir conteúdo de forma expansível e colapsável.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.icon - URL ou caminho do ícone a ser exibido no título do accordion.
 * @param {string} props.title - Título a ser exibido no cabeçalho do accordion.
 * @param {string} props.content - Conteúdo a ser exibido quando o accordion estiver expandido.
 * @param {boolean} props.isOpen - Define se o accordion está aberto (`true`) ou fechado (`false`).
 * @param {Function} props.onToggle - Função chamada ao clicar no cabeçalho do accordion para alternar seu estado.
 * 
 * @example
 * // Exemplo de uso
 * <Accordion
 *   icon="/path/to/icon.svg"
 *   title="Título do Accordion"
 *   content="Conteúdo do Accordion"
 *   isOpen={true}
 *   onToggle={() => console.log('Alternar accordion')}
 * />
 * 
 * @returns {JSX.Element} Elemento JSX que representa o item do accordion.
 */
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
