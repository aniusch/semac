import React, { useState } from "react";
import ArrowLeftIcon from "../../../assets/icons/arrow_left_prog.svg";
import ArrowRightIcon from "../../../assets/icons/arrow_right_prog.svg";
import "./Programacao.css";
import CarouselProgramacao from "../../../components/carousel-programacao/CarouselProgramacao";
import programacaoDias from "../../../data/lista_programacao_terceira_semana";

/**
 * Componente Programacao que exibe a programação diária do evento SEMAC.
 * Permite navegar entre os dias do evento, exibindo os detalhes de cada dia selecionado.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <Programacao />
 *
 * @returns {JSX.Element} Seção de programação com navegação por dias e carrossel de eventos do dia atual.
 */
const Programacao = () => {
  const [diaAtual, setDiaAtual] = useState(0);

    /**
   * Formata a data para exibir o dia numérico e o dia da semana separadamente.
   *
   * @param {string} data - Data no formato "DD/MM-DIASEMANA".
   * @returns {Object} Objeto com data numerica e dia da semana.
   */
  const formatarData = (data) => {
    const [dataNumerica, diaSemana] = data.split("-");
    return { dataNumerica, diaSemana };
  };

  /**
   * Muda o dia atual da programação baseado na direção ("next" ou "prev").
   *
   * @param {string} direction - Direção para mudar o dia ("next" para o próximo, "prev" para o anterior).
   */
  const handleChangeDia = (direction) => {
    if (direction === "next" && diaAtual < programacaoDias.length - 1) {
      setDiaAtual(diaAtual + 1);
    } else if (direction === "prev" && diaAtual > 0) {
      setDiaAtual(diaAtual - 1);
    }
  };

  const { dataNumerica, diaSemana } = formatarData(
    programacaoDias[diaAtual].data
  );

  return (
    <div className="programacao-section" id="programacao">
      <div className="header">
        <h1>Programação</h1>
        <div className="nav-buttons">
          <button
            onClick={() => handleChangeDia("prev")}
            disabled={diaAtual === 0}
            className="arrow-button"
          >
            <img src={ArrowLeftIcon} alt="Seta para esquerda" />
          </button>
          <span className="data-atual">{`${dataNumerica}-${diaSemana}`}</span>
          <button
            onClick={() => handleChangeDia("next")}
            disabled={diaAtual === programacaoDias.length - 1}
            className="arrow-button"
          >
            <img src={ArrowRightIcon} alt="Seta para direita" />
          </button>
        </div>
      </div>
      <CarouselProgramacao
        data={dataNumerica}
        eventos={programacaoDias[diaAtual].eventos}
      />
      <div className="container-texto-prog">
        <div className="texto-prog">
          <h1>Gostou da programação?</h1>
          <hr className="quebra-texto"></hr>
          <p>
            Curtiu o que preparamos para a III Semana das Engenharias de
            Automação e Computação? Não perca a chance de fazer parte dessa
            experiência incrível! Inscreva-se agora e garanta seu lugar no
            evento.
          </p>
          <button
            className="btn-participar"
            onClick={() =>
              window.open(
                "https://eventosacademicos.ufmt.br/index.php/semac/",
                "_blank"
              )
            }
          >
            Quero Participar!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programacao;
