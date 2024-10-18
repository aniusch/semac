import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThirdEditionPage from './pages/ThirdEditionPage';
import NotFoundPage from './pages/NotFoundPage';

const RouteTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'SEMAC - Semana das Engenharias de Automação e Computação',
      '/terceira-edicao': 'SEMAC - III Edição',
    };

    document.title = routeTitles[location.pathname] || 'SEMAC';
  }, [location]);

  return null;
};

//Test de Comite
function App() {
  return (
    <Router>
      <RouteTitleUpdater />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terceira-edicao" element={<ThirdEditionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;