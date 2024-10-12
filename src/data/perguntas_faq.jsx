import user from "../assets/icons/users.svg";
import checklist from "../assets/icons/checklist.svg";
import piggy from "../assets/icons/piggy-coin.svg";
import check from "../assets/icons/check.svg";
import phone from "../assets/icons/phone.svg";

const faqItems = [
  {
    icon: user,
    title: "Quando normalmente o evento ocorre?",
    content: "O evento é realizado anualmente, geralmente no mês de dezembro. As datas exatas são definidas conforme o calendário da organização, então fique atento às atualizações para garantir que você não perca!"
  },
  {
    icon: checklist,
    title: "Como faço para me inscrever?",
    content: (
      <>
        Para se inscrever, acesse o site oficial do evento em:{" "}
        <a href="https://eventosacademicos.ufmt.br/index.php/semac/" target="_blank" rel="noopener noreferrer">
          https://eventosacademicos.ufmt.br/index.php/semac/
        </a>. Lá, você encontrará todas as instruções necessárias para completar sua inscrição de forma rápida e simples.
      </>
    )
  },
  {
    icon: piggy,
    title: "Há algum custo para participar?",
    content: "Não, a participação no evento é totalmente gratuita! Aproveite essa oportunidade para aprender, se conectar com especialistas e expandir seu conhecimento sem nenhum custo."
  },
  {
    icon: check,
    title: "Haverá certificação para os participantes?",
    content: "Sim, todos os participantes que atenderem aos critérios estabelecidos receberão um certificado oficial emitido pelo Siex, validando sua participação e experiência no evento."
  },
  {
    icon: phone,
    title: "Como eu posso me voluntariar para participar?",
    content: "Se você quer se voluntariar e contribuir para o sucesso do evento, os Centros Acadêmicos de Engenharia de Computação e de Controle e Automação realizam uma seleção de voluntários entre os estudantes desses cursos. Fique atento aos anúncios e oportunidades!"
  }
];

export default faqItems