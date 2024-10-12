import React, { useState } from "react";
import Accordion from "../../../components/accordion/Accordion";
import "./Faq.css";
import faqItems from "../../../data/perguntas_faq";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
