import React from "react";
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

function ThirdEditionPage() {
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