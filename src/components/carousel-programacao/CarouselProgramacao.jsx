import React from "react";
import "./CarouselProgramacao.css";

const CarouselProgramacao = ({ data, eventos }) => {
  return (
    <div className="programacao-container">
      {eventos.map((turno, index) => (
        <div key={index} className="programacao-bloco">
          <h1>
            {data} - {turno.dia} - {turno.turno}
          </h1>
          <ul>
            {turno.eventos.map((evento, idx) => (
              <li key={idx}>
                <div className="evento-info">
                  <div>
                    <div className="container-hor-tit">
                      <span className="evento-horario">{evento.horario}</span>
                      <div>
                        <div>
                          <span className="evento-titulo">{evento.titulo}</span>
                        </div>
                        <div className="evento-palestrantes">
                          <span>com {evento.palestrantes.join(" e ")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className={`tag ${evento.tipo.toLowerCase()}`}>
                      {evento.tipo}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CarouselProgramacao;
