import React from "react";
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

function HomePage() {

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