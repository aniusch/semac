import React, { useEffect } from "react";
import Numeros from "../sections/home/numeros/Numeros";
import Faq from "../sections/common/faq/Faq";
import Colaboradores from "../sections/common/colaboradores/Colaboradores";
import ScrollToTopButton from "../components/scroll-top-button/ScrollToTopButton";
import Footer from "../sections/common/footer/Footer";
import HeroTerceiraEdicao from "../sections/terceira-edicao/hero/HeroTerceiraEdicao";
import SobreTerceiraEdicao from "../sections/terceira-edicao/sobre/SobreTerceiraEdicao";
import Trabalhos from "../sections/terceira-edicao/trabalhos/Trabalhos";
import Programacao from "../sections/terceira-edicao/programacao/Programacao";
import linksPaginas from "../data/links_paginas";

/**
 * Componente ThirdEditionPage que exibe a página da terceira edição do evento.
 * Inclui seções detalhadas sobre a edição, trabalhos apresentados, programação do evento, colaboradores, e um botão para voltar ao topo.
 *
 * Ao montar, o componente faz a rolagem suave da página até o topo.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <ThirdEditionPage />
 *
 * @returns {JSX.Element} Página da terceira edição com seções de herói, sobre a edição, números, trabalhos, FAQ, programação, colaboradores e um botão para voltar ao topo.
 */
function ThirdEditionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <HeroTerceiraEdicao />
      <SobreTerceiraEdicao />
      <Numeros />
      <Trabalhos />
      <Faq />
      <Programacao />
      <Colaboradores />
      <Footer links={linksPaginas.thirdEditionPageLinks} />
      <ScrollToTopButton heroId={'hero-terceira-edicao'} />
    </>
  );
}

export default ThirdEditionPage;