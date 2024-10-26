import React, { useState } from "react";
import Accordion from "../../../components/accordion/Accordion";
import "./Faq.css";
import faqItems from "../../../data/perguntas_faq";

/**
 * Componente Faq que exibe uma lista de perguntas frequentes em formato de acordeão.
 * Cada item da lista pode ser expandido para mostrar o conteúdo relacionado à pergunta.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <Faq />
 *
 * @returns {JSX.Element} Seção de perguntas frequentes com uma lista de itens de acordeão para interação.
 */
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  /**
   * Manipula a abertura e fechamento de um item do acordeão.
   *
   * @param {number} index - Índice do item a ser alternado.
   */
  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="geral" id="faq">
      <div className="bloco">
        <hr className="quebra"></hr>
        <h1 className="title2">Perguntas Frequentes</h1>
        <p>
          Encontre respostas rápidas sobre inscrições, participação, submissões
          e mais nas Perguntas Frequentes. Se precisar de mais ajuda, estamos
          aqui para você!
        </p>
      </div>
      <div className="accord">
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            icon={item.icon}
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => handleAccordionToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
