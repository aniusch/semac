import React from 'react';
import './TextoEdicao.css';

/**
 * Componente TextoEdicao exibe informações sobre uma edição específica, incluindo título, edição e descrição.
 * A cor do rótulo de edição muda com base no valor de `edicao`.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.edicao - Nome ou rótulo da edição (ex.: "1ª EDIÇÃO", "2ª EDIÇÃO").
 * @param {string} props.titulo - Título da edição, renderizado como HTML seguro.
 * @param {string} props.descricao - Descrição da edição.
 * 
 * @example
 * // Exemplo de uso com edição, título e descrição
 * <TextoEdicao
 *   edicao="2ª EDIÇÃO"
 *   titulo="Bem-vindo à <strong>nova edição</strong>!"
 *   descricao="Descrição detalhada sobre esta edição."
 * />
 *
 * @returns {JSX.Element} Componente com título, edição e descrição formatados.
 */
const TextoEdicao = ({ edicao, titulo, descricao }) => {
  const badgeColor = edicao === "2ª EDIÇÃO" ? "badge-purple" : "badge-blue";

  return (
    <div className="texto-edicao-container">
      <span className={`texto-edicao-edition ${badgeColor}`}>{edicao}</span>
      <h1 className="texto-edicao-title" dangerouslySetInnerHTML={{ __html: titulo }} />
      <p className="texto-edicao-description">{descricao}</p>
    </div>
  );
};

export default TextoEdicao;
