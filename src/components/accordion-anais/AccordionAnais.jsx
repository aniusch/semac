import React from "react";
import "./AccordionAnais.css";
import arrowdown from "../../assets/icons/arrow_down_anais.svg";
import download from "../../assets/icons/download_icon_anais.svg"

/**
 * Componente Accordion para exibir informações sobre um artigo ou obra de Anais, incluindo título, autor, palavras-chave e link de download.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - Título do artigo ou obra a ser exibido.
 * @param {string} props.owner - Nome do autor do artigo ou obra.
 * @param {string} props.keywords - Palavras-chave relacionadas ao artigo ou obra.
 * @param {string} props.link - URL do link para download do artigo ou obra.
 * @param {boolean} props.isOpen - Define se o accordion está aberto (`true`) ou fechado (`false`).
 * @param {Function} props.onToggle - Função chamada ao clicar no cabeçalho do accordion para alternar seu estado.
 * 
 * @example
 * // Exemplo de uso
 * <Accordion
 *   title="Título da Obra"
 *   owner="Nome do Autor"
 *   keywords="Palavra1, Palavra2, Palavra3"
 *   link="/path/to/download"
 *   isOpen={true}
 *   onToggle={() => console.log('Alternar accordion')}
 * />
 * 
 * @returns {JSX.Element} Elemento JSX que representa o item do accordion para exibir informações de Anais.
 */
const Accordion = ({ title, owner, keywords, link, isOpen, onToggle }) => {
  return (
    <div className={`accordion-item-anais ${isOpen ? "open" : ""}`}>
      <div className="accordion-title-anais" onClick={onToggle}>
        <div className="accordion-title-anais">
          <span>{title}</span>
        </div>
        <img
          src={arrowdown}
          alt={isOpen ? "Seta para cima" : "Seta para baixo"}
          className={`arrow-icon-anais ${isOpen ? "rotate-anais" : ""}`}
        />
      </div>
      <hr className="hr-acc-anais" />
      <div className="accordion-content-anais">
        <div className="textos-anais-aberto">
          <span> <span className="text-autor">Autor: </span>{owner} </span>
          <span> <span className="text-keywords">Palavras-chaves: </span>{keywords} </span>
        </div>
        <a className="link-anais-download" href={link} target="_blank">
          <button className="botao-download-anais"><img src={download} alt="Download da obra" className="img-download-obra" />
            <span className="texto-botao-download">
              Download</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Accordion;
