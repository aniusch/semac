import React from "react";
import "./Colaboradores.css";
import listaEmpresas from "../../../data/lista_logoscolaboradores";

/**
 * Componente Colaboradores que exibe uma seção de agradecimento aos colaboradores do evento.
 * Inclui uma mensagem de agradecimento e uma coleção de logotipos dos colaboradores, cada um com um link para o site da empresa.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <Colaboradores />
 *
 * @returns {JSX.Element} Seção de colaboradores com mensagem de agradecimento e logotipos clicáveis das empresas parceiras.
 */
const Colaboradores = () => {
  return (
    <div id="colaboradores" className="section_colaboradores">
      <section className="texto_colaboradores">
        <h1 className="titulo um">
          Aos nossos
          <span className="titulo_gradiente"> colaboradores...</span>
        </h1>
        <h1 className="titulo dois">Muito obrigado!</h1>
        <p className="agradecimento">Nosso sucesso se dá com o apoio dos nossos colaboradores.
          Obrigado por acreditarem no nosso projeto e ajudarem a construir o futuro da automação e computação!</p>
      </section>

      <section className="imgs_colaboradores">
        <div className="colecao_imgs">
          {listaEmpresas.map((empresa) => (
            <a className="imgComLink" href={empresa.href} key={empresa.alt} target="_blank">
              <img className="logoEmpresa" src={empresa.src} alt={empresa.alt} />
            </a>
          ))}
        </div>
      </section>
    </div >
  );
};

export default Colaboradores;