import Foto_1 from "/src/assets/fotos_edicoes_anteriores/Foto1.png";
import Foto_2 from "/src/assets/fotos_edicoes_anteriores/Foto2.jpg";
import Foto_3 from "/src/assets/fotos_edicoes_anteriores/Foto3.png";
import Foto_4 from "/src/assets/fotos_edicoes_anteriores/Foto4.png";
import Foto_5 from "/src/assets/fotos_edicoes_anteriores/Foto5.png";
import Foto_6 from "/src/assets/fotos_edicoes_anteriores/Foto6.jpg";
import Foto_7 from "/src/assets/fotos_edicoes_anteriores/Foto7.png";
import Foto_8 from "/src/assets/fotos_edicoes_anteriores/Foto8.png";
import Foto_9 from "/src/assets/fotos_edicoes_anteriores/Foto9.png";
import Foto_10 from "/src/assets/fotos_edicoes_anteriores/Foto10.png";
import Foto_11 from "/src/assets/fotos_edicoes_anteriores/Foto11.png";
import Foto_12 from "/src/assets/fotos_edicoes_anteriores/Foto12.png";

/**
 * Lista de edições anteriores do evento SEMAC, com detalhes sobre cada edição,
 * incluindo título, descrição e uma galeria de imagens associadas.
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} edicao - Nome da edição (ex.: "1ª EDIÇÃO", "2ª EDIÇÃO").
 * @property {string} titulo - Título da edição, que pode incluir HTML para formatação.
 * @property {string} descricao - Descrição detalhada da edição.
 * @property {Array<Object>} imagens - Lista de imagens associadas à edição.
 * @property {string} imagens[].src - Caminho para a imagem.
 * @property {string} imagens[].size - Tamanho da imagem (ex.: "small", "medium", "large").
 *
 * @example
 * const edicao = lista_edicoes_anteriores[0];
 * console.log(edicao.titulo); // Saída: "III Semana das Engenharias de<br />Automação e Computação"
 */
const lista_edicoes_anteriores = [
  {
    edicao: "1ª EDIÇÃO",
    titulo: "III Semana das Engenharias de<br />Automação e Computação", 
    descricao: "A segunda edição da Semana das Engenharias de Automação & Computação (SEMAC) 2024, realizada na Universidade Federal de Mato Grosso, em Cuiabá, de 18 a 21 de março, foi um sucesso. O evento reuniu estudantes e profissionais para quatro dias de inovação, palestras inspiradoras, workshops práticos e oportunidades de networking.",
    imagens: [
      { src: Foto_1, size: 'large' },
      { src: Foto_2, size: 'medium' },
      { src: Foto_3, size: 'small' },
      { src: Foto_4, size: 'small' },
      { src: Foto_5, size: 'large' },
      { src: Foto_6, size: 'medium' }
    ]
  },
  {
    edicao: "2ª EDIÇÃO",
    titulo: "Conectando o Futuro: Engenharias de Automação e Computação em Ação",
    descricao: "A edição de 2023 da SEMAC, intitulada 'Conectando o Futuro: Engenharias de Automação e Computação em Ação', foi um marco significativo, destacando as inovações e os desafios enfrentados nas áreas de Engenharia de Automação e Computação. Realizada entre os dias 31 de maio e 02 de junho de 2023, essa edição focou em explorar o impacto das tecnologias emergentes e a evolução dos sistemas automatizados no mercado de trabalho atual.",
    imagens: [
      { src: Foto_7, size: 'large' },
      { src: Foto_8, size: 'medium' },
      { src: Foto_9, size: 'small' },
      { src: Foto_10, size: 'small' },
      { src: Foto_11, size: 'large' },
      { src: Foto_12, size: 'medium' }
    ]
  }
];

export default lista_edicoes_anteriores;
