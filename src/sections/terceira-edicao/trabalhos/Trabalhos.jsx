import React from "react";
import "./Trabalhos.css";
import TrabalhosImg from "../../../assets/trabalhos/img-trabalhos.png";

/**
 * Componente Trabalhos que exibe uma chamada para submissão de trabalhos no evento SEMAC.
 * Contém uma imagem ilustrativa, descrição e um botão para redirecionar para a página de submissão.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <Trabalhos />
 *
 * @returns {JSX.Element} Seção de chamada para submissão de trabalhos no evento SEMAC, com uma descrição, imagem e botão de ação.
 */
const Trabalhos = () => {
  return (
    <div id="trabalhos">
      <div className="trabalhos-container">
        <div>
          <img
            className="img-container"
            src={TrabalhosImg}
            alt="TrabalhosImg"
          />
        </div>
        <div className="trabalhos-col">
          <hr className="bar" />
          <h1 className="maintext">
            Que tal ter o {<span className="cor-degrade">seu trabalho</span>}
          </h1>
          <h1 className="maintext">exposto um dos nossos painéis?</h1>
          <p className="subtext">
            Submeta seu projeto e mostre o que você pode fazer! Compartilhe suas
            pesquisas, protótipos ou soluções tecnológicas, receba feedback
            valioso e destaque-se na comunidade acadêmica e profissional. Esta é
            a sua chance de brilhar e conectar-se com outros talentos!
          </p>
          <button
            className="btn-trabalhos"
            onClick={() => {
              window.open(
                "https://www.even3.com.br/semac-3e/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            Realizar Submissão ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trabalhos;
