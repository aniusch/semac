import React, { useState } from "react";
import Accordion from "../../../components/accordion-anais/AccordionAnais.jsx";
import obrasAnais from "../../../data/obras_anais.js";
import './AnaisTrabalhos.css';

/**
 * Componente AnaisTrabalhos que exibe os anais da SEMAC em uma estrutura de acordeão.
 * Permite alternar entre edições diferentes e expandir cada obra para ver mais detalhes.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <AnaisTrabalhos />
 *
 * @returns {JSX.Element} Seção de anais da SEMAC com uma lista de obras e possibilidade de alternar entre edições.
 */
const AnaisTrabalhos = () => {
    const [edicao, setEdicao] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

    /**
     * Alterna a edição exibida na interface.
     * Fecha qualquer item de acordeão aberto antes de trocar a edição.
     *
     * @param {number} numEdicao - Número da edição a ser exibida (0 ou 1).
     */
    const trocaEdicao = (numEdicao) => {
        if (openIndex !== null) {
            setOpenIndex(null);
            setTimeout(() => {
                setEdicao(numEdicao);
            }, 650);
        } else setEdicao(numEdicao);
    };

    /**
     * Manipula a abertura e fechamento de um item do acordeão.
     *
     * @param {number} index - Índice do item de acordeão a ser alternado.
     */
    const handleAccordionToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="anais-semac" className="anais-semac">
            <header className="header-anais">
                <div className="titulo-secao-anais">
                    <h1 className="heading-anais">Anais da SEMAC</h1>
                    <div className="vetor-titulo-anais"></div>
                </div>

                <div className="botoes-edicoes-anais">
                    <div className="botoes-primeira-segunda">
                        <button onClick={() => trocaEdicao(0)} className="botoes-primeira">
                            <span className={edicao === 0 ? "heading-colorido" : "heading-cinza"}>1ª EDIÇÃO</span>
                        </button>
                        <button onClick={() => trocaEdicao(1)} className="botoes-segunda">
                            <span className={edicao === 1 ? "heading-colorido" : "heading-cinza"}>2ª EDIÇÃO</span>
                        </button>
                    </div>
                    <div className="linhas-botoes">
                        <div className={edicao === 0 ? "vetor-colorido" : "vetor-cinza"}></div>
                        <div className={edicao === 1 ? "vetor-colorido" : "vetor-cinza"}></div>
                    </div>
                </div>
            </header>

            <section className="obras-anais">
                <div className="accord-anais">
                    {obrasAnais[edicao].informacoes.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            owner={item.owner}
                            keywords={item.keywords}
                            link={item.link}
                            isOpen={openIndex === index}
                            onToggle={() => handleAccordionToggle(index)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AnaisTrabalhos;
