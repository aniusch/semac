import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/404.png";

/**
 * Componente NotFoundPage que exibe uma mensagem de erro "404 - Página não encontrada".
 * Inclui um link para redirecionar o usuário à página inicial e uma imagem ilustrativa.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <NotFoundPage />
 *
 * @returns {JSX.Element} Página de erro 404 com mensagem, imagem e link para a página inicial.
 */
const NotFoundPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/" style={{ color: "white" }}>
        Ir para a Página Inicical
      </Link>
      <img src={NotFoundImage} alt="404 Not Found" style={{width: "30%"}}/>
    </div>
  );
};

export default NotFoundPage;
