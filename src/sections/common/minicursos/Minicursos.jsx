import React from "react";
import "./Minicursos.css";
import CarouselMinicursos from "../../../components/carousel-minicursos/CarouselMinicursos";

const Minicursos = () => {
  return (
    <div id="cursos" className="minicursos-section">
      <div className="titulos">
        <hr className="quebra" />
        <h1>Minicursos e Palestras</h1>
        <p>
          Confira os minicursos e palestras que já foram oferecidos na Semana
          Acadêmica
        </p>
      </div>
      <CarouselMinicursos></CarouselMinicursos>
    </div>
  );
};

export default Minicursos;
