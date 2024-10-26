import React from 'react';
import edicoesAnteriores from '../../../data/lista_edicoes_anteriores';
import TextoEdicao from '../../../components/texto-edicao/TextoEdicao.jsx';
import GaleriaEdicao from '../../../components/galeria-edicao/GaleriaEdicao.jsx';
import './SobreEdicao.css';
import CarouselMinicursos from "../../../components/carousel-minicursos/CarouselMinicursos";
import listaMinicursosPalestras from "../../../data/lista_minicursos_palestras";

/**
 * Componente SobreEdicao que exibe informações detalhadas sobre cada edição passada da SEMAC.
 * Cada edição inclui um título, descrição, galeria de imagens e carrossel de minicursos e palestras.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <SobreEdicao />
 *
 * @returns {JSX.Element} Seção detalhada sobre edições anteriores da SEMAC, com descrição, galeria e carrossel de eventos.
 */
const SobreEdicao = () => {
  return (
    <div className="sobre-edicoes-container">
      {edicoesAnteriores.map((edicao, index) => {
        const minicursosEdicao = listaMinicursosPalestras[`edicao${index+1}`];

        return (
          <div key={index} id={`edicao-${index+1}`} className="edicao-item">
            <TextoEdicao
              edicao={edicao.edicao}
              titulo={edicao.titulo}
              descricao={edicao.descricao}
            />
            <GaleriaEdicao imagens={edicao.imagens} />
            <CarouselMinicursos listaMinicursos={minicursosEdicao} />
          </div>
        );
      })}
  </div>
);
};

export default SobreEdicao;
