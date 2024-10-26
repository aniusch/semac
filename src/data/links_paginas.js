/**
 * Objeto contendo listas de links para navegação em diferentes páginas do site.
 * Cada lista representa uma seção específica da página, com links e textos associados.
 *
 * @constant
 * @type {Object}
 * @property {Array<Object>} homePageLinks - Links de navegação para a página inicial.
 * @property {string} homePageLinks[].href - Âncora ou URL do link.
 * @property {string} homePageLinks[].text - Texto de exibição do link.
 * 
 * @property {Array<Object>} thirdEditionPageLinks - Links de navegação para a página da terceira edição.
 * @property {string} thirdEditionPageLinks[].href - Âncora ou URL do link.
 * @property {string} thirdEditionPageLinks[].text - Texto de exibição do link.
 * 
 * @property {Array<Object>} previousEditionsPageLinks - Links de navegação para a página de edições anteriores.
 * @property {string} previousEditionsPageLinks[].href - Âncora ou URL do link.
 * @property {string} previousEditionsPageLinks[].text - Texto de exibição do link.
 *
 * @example
 * // Exemplo de acesso a um link específico
 * const primeiroLinkHome = linksPaginas.homePageLinks[0];
 * console.log(primeiroLinkHome.href); // Saída: "#sobre-evento"
 */
const linksPaginas = {
  homePageLinks: [
    { href: "#sobre-evento", text: "Sobre" },
    { href: "#cursos", text: "Minicursos e Palestras" },
    { href: "#faq", text: "Perguntas Frequentes" },
    { href: "#palestrantes", text: "Palestrantes" },
    { href: "#eventos-anteriores", text: "Eventos Anteriores" },
    { href: "#colaboradores", text: "Colaboradores" },
  ],
  thirdEditionPageLinks: [
    { href: "#sobre-terceira-edicao", text: "Sobre" },
    { href: "#trabalhos", text: "Trabalhos" },
    { href: "#programacao", text: "Programação" },
    { href: "#faq", text: "Perguntas Frequentes" },
    { href: "#colaboradores", text: "Colaboradores" },
  ],
  previousEditionsPageLinks: [
    { href: "#edicao-1", text: "1ª Edição" },
    { href: "#edicao-2", text: "2ª Edição" },
    { href: "#anais-semac", text: "Anais" },
    { href: "#colaboradores", text: "Colaboradores" },
  ],
};

export default linksPaginas;
