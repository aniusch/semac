import user from "../assets/icons/users.svg";
import checklist from "../assets/icons/checklist.svg";
import piggy from "../assets/icons/piggy-coin.svg";
import check from "../assets/icons/check.svg";
import phone from "../assets/icons/phone.svg";

/**
 * Lista de itens de FAQ (Perguntas Frequentes) para exibir informações sobre o evento.
 * Cada item contém um ícone, título e conteúdo explicativo.
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} icon - Caminho para o ícone representativo do item.
 * @property {string} title - Título ou pergunta do item de FAQ.
 * @property {string|JSX.Element} content - Conteúdo ou resposta associado ao item de FAQ.
 *
 * @example
 * const faqItems = [
 *   {
 *     icon: user,
 *     title: "Quando normalmente o evento ocorre?",
 *     content: "O evento é realizado anualmente, geralmente no mês de dezembro. As datas exatas são definidas conforme o calendário da organização."
 *   },
 *   {
 *     icon: checklist,
 *     title: "Como faço para me inscrever?",
 *     content: (
 *       <>
 *         Para se inscrever, acesse o site da edição e {" "}
 *         <a href="https://www.even3.com.br/semac-3e/" target="_blank" rel="noopener noreferrer">
 *           se inscreva
 *         </a>.
 *       </>
 *     )
 *   },
 *   // Outros itens
 * ];
 */
const faqItems = [
  {
    icon: user,
    title: "Quando normalmente o evento ocorre?",
    content:
      "O evento é realizado anualmente, geralmente no mês de dezembro. As datas exatas são definidas conforme o calendário da organização, então fique atento às atualizações para garantir que você não perca!",
  },
  {
    icon: checklist,
    title: "Como faço para me inscrever?",
    content: (
      <>
        Para se inscrever de maneira rápida e fácil, acesse o site da edição e {" "}
        <a
          href="https://www.even3.com.br/semac-3e/"
          target="_blank"
          rel="noopener noreferrer"
        >
          se inscreva
        </a>
        . Lá, você encontrará todas as informações e instruções necessárias para
        concluir sua inscrição com sucesso.
      </>
    ),
  },
  {
    icon: piggy,
    title: "Há algum custo para participar?",
    content:
      "Não, a participação no evento é totalmente gratuita! Aproveite essa oportunidade para aprender, se conectar com especialistas e expandir seu conhecimento sem nenhum custo.",
  },
  {
    icon: check,
    title: "Haverá certificação para os participantes?",
    content:
      "Sim, todos os participantes que atenderem aos critérios estabelecidos receberão um certificado oficial emitido pelo Siex, validando sua participação e experiência no evento.",
  },
  {
    icon: phone,
    title: "Como eu posso me voluntariar para participar?",
    content:
      "Se você quer se voluntariar e contribuir para o sucesso do evento, os Centros Acadêmicos de Engenharia de Computação e de Controle e Automação realizam uma seleção de voluntários entre os estudantes desses cursos. Fique atento aos anúncios e oportunidades!",
  },
];

export default faqItems;
