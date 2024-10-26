import React from "react";
import "./CarouselProgramacao.css";

/**
 * Componente CarouselProgramacao para exibir uma programação de eventos em um formato de carrossel, com data, turno e detalhes dos eventos.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.data - Data do dia da programação (ex.: "25/10/2024").
 * @param {Array<Object>} props.eventos - Lista de turnos do dia, cada um contendo eventos específicos.
 * @param {string} props.eventos[].dia - Dia da semana (ex.: "Segunda-feira").
 * @param {string} props.eventos[].turno - Turno dos eventos (ex.: "Manhã", "Tarde").
 * @param {Array<Object>} props.eventos[].eventos - Lista de eventos para o turno especificado.
 * @param {string} props.eventos[].eventos[].horario - Horário do evento (ex.: "09:00").
 * @param {string} props.eventos[].eventos[].titulo - Título do evento (ex.: "Palestra de Abertura").
 * @param {Array<string>} props.eventos[].eventos[].palestrantes - Lista de palestrantes do evento.
 * @param {string} props.eventos[].eventos[].tipo - Tipo do evento (ex.: "Workshop", "Palestra").
 * 
 * @example
 * const data = "25/10/2024";
 * const eventos = [
 *   {
 *     dia: "Segunda-feira",
 *     turno: "Manhã",
 *     eventos: [
 *       {
 *         horario: "09:00",
 *         titulo: "Palestra de Abertura",
 *         palestrantes: ["Ana Silva", "Carlos Souza"],
 *         tipo: "Palestra"
 *       },
 *       {
 *         horario: "10:30",
 *         titulo: "Workshop de React",
 *         palestrantes: ["João Almeida"],
 *         tipo: "Workshop"
 *       }
 *     ]
 *   },
 *   {
 *     dia: "Segunda-feira",
 *     turno: "Tarde",
 *     eventos: [
 *       {
 *         horario: "14:00",
 *         titulo: "Painel de Discussão",
 *         palestrantes: ["Maria Costa", "Paulo Pereira"],
 *         tipo: "Painel"
 *       }
 *     ]
 *   }
 * ];
 * 
 * <CarouselProgramacao data={data} eventos={eventos} />
 *
 * @returns {JSX.Element} Carrossel de programação com data, turnos e detalhes de cada evento.
 */
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
