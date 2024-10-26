import React, { useEffect } from "react";
import Colaboradores from "../sections/common/colaboradores/Colaboradores";
import ScrollToTopButton from "../components/scroll-top-button/ScrollToTopButton";
import Footer from "../sections/common/footer/Footer";
import linksPaginas from "../data/links_paginas";
import HeroEdicoesAnteriores from "../sections/edicoes-anteriores/hero-edicoes-anteriores/HeroEdicoesAnteriores";
import SobreEdicao from "../sections/edicoes-anteriores/sobre-edicao/SobreEdicao";
import AnaisTrabalhos from "../sections/edicoes-anteriores/anais-trabalhos/AnaisTrabalhos";

/**
 * Componente PreviousEditions que exibe a página das edições anteriores do evento.
 * Contém seções de informações sobre edições passadas, trabalhos apresentados, colaboradores e um botão para voltar ao topo da página.
 *
 * Ao montar, o componente faz a rolagem suave da página até o topo.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <PreviousEditions />
 *
 * @returns {JSX.Element} Página de edições anteriores com seções de herói, sobre a edição, trabalhos, colaboradores e um botão de voltar ao topo.
 */
function PreviousEditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <HeroEdicoesAnteriores />
      <SobreEdicao />
      <AnaisTrabalhos />
      <Colaboradores />
      <Footer links={linksPaginas.previousEditionsPageLinks} />
      <ScrollToTopButton heroId={"hero-previous-editions"} />
    </>
  );
}

export default PreviousEditions;
