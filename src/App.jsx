import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThirdEditionPage from './pages/ThirdEditionPage';
import NotFoundPage from './pages/NotFoundPage';
import PreviousEditions from './pages/PreviousEditions';


/**
 * Componente RouteTitleUpdater atualiza o título da página com base na rota atual.
 * 
 * @component
 * @example
 * // Exemplo de uso dentro de um roteador:
 * <RouteTitleUpdater />
 *
 * @returns {null} Não renderiza nada visualmente, apenas atualiza o título do documento.
 */
const RouteTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "SEMAC - Semana das Engenharias de Automação e Computação",
      "/terceira-edicao": "SEMAC - III Edição",
      "/edicoes-anteriores": "SEMAC - Eventos Anteriores",
    };

    document.title = routeTitles[location.pathname] || "SEMAC";
  }, [location]);
  return null;
};

/**
 * Componente App que define as rotas principais da aplicação SEMAC, gerenciando a navegação
 * e incluindo o componente RouteTitleUpdater para atualizar o título da página com base na rota.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <App />
 *
 * @returns {JSX.Element} Aplicativo principal com rotas configuradas para a página inicial, terceira edição, edições anteriores e uma página 404.
 */

function App() {
  return (
    <Router>
      <RouteTitleUpdater />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terceira-edicao" element={<ThirdEditionPage />} />
        <Route
          path="/edicoes-anteriores"
          element={<PreviousEditions />}
        ></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
