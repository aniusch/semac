import React from "react";
import "./Minicursos.css";
import CarouselMinicursos from "../../../components/carousel-minicursos/CarouselMinicursos";
import listaMinicursosPalestras from "../../../data/lista_minicursos_palestras";

/**
 * Componente Minicursos que exibe uma lista de minicursos e palestras em um carrossel.
 * Utiliza um conjunto de dados provenientes de diferentes edições do evento e os exibe em um carrossel interativo.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <Minicursos />
 *
 * @returns {JSX.Element} Seção de minicursos e palestras, com um título, descrição e carrossel dos eventos oferecidos.
 */

const Minicursos = () => {
  
  /** 
   * Combina as listas de minicursos e palestras de diferentes edições.
   * @type {Array<Object>}
   */

  const listaTotal = listaMinicursosPalestras.edicao1.concat(listaMinicursosPalestras.edicao2)

  return (
    <div id="cursos" className="minicursos">
      <div className="titulos">
        <hr className="quebra" />
        <h1>Minicursos e Palestras</h1>
        <p>
          Confira os minicursos e palestras que já foram oferecidos na Semana
          Acadêmica
        </p>
      </div>
      <CarouselMinicursos listaMinicursos={listaTotal}></CarouselMinicursos>
      
    </div>
  );
};

export default Minicursos;