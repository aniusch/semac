import React, { useEffect } from "react";
import Hero from "../sections/home/hero/Hero";
import SobreEvento from "../sections/home/sobre-evento/SobreEvento";
import Numeros from "../sections/home/numeros/Numeros";
import Minicursos from "../sections/common/minicursos/Minicursos";
import Palestrantes from "../sections/home/palestrantes/Palestrantes";
import Eventos from "../sections/home/eventos/Eventos";
import Faq from "../sections/common/faq/Faq";
import Colaboradores from "../sections/common/colaboradores/Colaboradores";
import ScrollToTopButton from "../components/scroll-top-button/ScrollToTopButton";
import Footer from "../sections/common/footer/Footer";
import linksPaginas from "../data/links_paginas";

/**
 * Componente principal da página inicial, que agrupa várias seções do site,
 * incluindo informações sobre o evento, minicursos, palestrantes, FAQ, colaboradores e mais.
 *
 * Ao ser carregado, o componente desloca a janela para o topo da página de forma suave.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <HomePage />
 *
 * @returns {JSX.Element} Página inicial completa, com seções organizadas e um botão para voltar ao topo.
 */
function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Hero />
      <SobreEvento />
      <Numeros />
      <Minicursos />
      <Palestrantes />
      <Eventos />
      <Faq />
      <Colaboradores />
      <Footer links={linksPaginas.homePageLinks} />
      <ScrollToTopButton heroId={'hero'} />
    </>
  );
}

export default HomePage;