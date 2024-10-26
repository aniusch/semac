/**
 * Lista de minicursos e palestras organizados por edição do evento, com informações detalhadas sobre cada atividade.
 * Cada item contém categoria, título, convidado, local e palavras-chave associadas.
 *
 * @constant
 * @type {Object}
 * @property {Array<Object>} edicao1 - Lista de atividades da primeira edição do evento.
 * @property {string} edicao1[].categoria - Categoria da atividade (ex.: "Palestra", "Oficina").
 * @property {string} edicao1[].titulo - Título da atividade.
 * @property {string} edicao1[].convidado - Nome do convidado ou palestrante.
 * @property {string} edicao1[].local - Local onde a atividade será realizada.
 * @property {string} edicao1[].palavras_chaves - Palavras-chave relacionadas à atividade.
 *
 * @property {Array<Object>} edicao2 - Lista de atividades da segunda edição do evento.
 * @property {string} edicao2[].categoria - Categoria da atividade (ex.: "Palestra", "Minicurso").
 * @property {string} edicao2[].titulo - Título da atividade.
 * @property {string} edicao2[].convidado - Nome do convidado ou palestrante.
 * @property {string} edicao2[].local - Local onde a atividade será realizada.
 * @property {string} edicao2[].palavras_chaves - Palavras-chave relacionadas à atividade.
 *
 * @example
 * const atividade = listaMinicursosPalestras.edicao1[0];
 * console.log(atividade.titulo); // Saída: "Empreendedorismo e Incubação de Empresas"
 */
const listaMinicursosPalestras = {
  "edicao1": [
    {
      categoria: "Palestra",
      titulo: "Empreendedorismo e Incubação de Empresas",
      convidado: "Pedro Guinazu",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Startups, Incubadoras, Empreendedorismo Inovador, Desenvolvimento de Negócios"
    },
    {
      categoria: "Palestra",
      titulo: "Modelagem de Conhecimento",
      convidado: "Prof. Einstein",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Modelagem Cognitiva, Gestão de Conhecimento, FAET, UFMT"
    },
    {
      categoria: "Palestra",
      titulo: "O Futuro da Educação e do Mercado de Trabalho",
      convidado: "Matheus Spartalis",
      local: "Bloco Didático 2 - Sala 10",
      palavras_chaves: "Educação 4.0, Transformação Digital, Futuro do Trabalho, Capacitação Profissional, Inovação Educacional"
    },
    {
      categoria: "Palestra",
      titulo: "Agro Digital - Amaggi",
      convidado: "Amaggi",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Agronegócio Digital, Inovações Tecnológicas, AgroTech, Sustentabilidade, Amaggi"
    },
    {
      categoria: "Oficina",
      titulo: "Oficina de Arduino",
      convidado: "Prof. Sólon",
      local: "Bloco Didático 2 - Sala 14 (Laboratório 2)",
      palavras_chaves: "Arduino, Programação, Eletrônica, Robótica Educacional"
    },
    {
      categoria: "Palestra",
      titulo: "Inteligência Artificial Aplicada a Problemas de Engenharia",
      convidado: "Prof. Filipe Matos de Vasconcelos",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Inteligência Artificial, Engenharia, Machine Learning, Automação"
    },
    {
      categoria: "Palestra",
      titulo: "Head Nuvem Tecnologia",
      convidado: "Rodrigo Oliveira",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Computação em Nuvem, Infraestrutura Tecnológica, Cloud Solutions, Transformação Digital"
    },
    {
      categoria: "Palestra",
      titulo: "Oportunidades de Estágio - IEL",
      convidado: "Adriana",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Estágios, Desenvolvimento Profissional, Mercado de Trabalho, IEL, Oportunidades de Carreira"
    },
    {
      categoria: "Palestra",
      titulo: "Metaverso",
      convidado: "Matheus Spartalis",
      local: "Bloco Didático 2 - Sala 10",
      palavras_chaves: "Metaverso, Realidade Virtual, Futuro Digital, Inovação Tecnológica"
    },
    {
      categoria: "Palestra",
      titulo: "Digitalização de Transformadores de Potência",
      convidado: "Rodrigo Cruz",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Digitalização, Transformadores de Potência, Automação Industrial, Inovação Tecnológica"
    },
    {
      categoria: "Palestra",
      titulo: "Manutenção e Automação na Águas Cuiabá",
      convidado: "Marcus Maia",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Manutenção Industrial, Automação, Águas Cuiabá, Infraestrutura de Saneamento"
    },
    {
      categoria: "Palestra",
      titulo: "Aplicação de Engenharia de Controle e Automação na Indústria",
      convidado: "Dr. Valter Oliveira",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Engenharia de Controle, Automação Industrial, Inovação Tecnológica, Processos Industriais"
    },
    {
      categoria: "Palestra",
      titulo: "Robótica Assistiva",
      convidado: "Prof. Thais Kempner",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Robótica Assistiva, Engenharia Elétrica, Tecnologia para Inclusão, Automação"
    },
    {
      categoria: "Palestra",
      titulo: "Previsão de Séries Temporais e Otimização de Processos Siderúrgicos",
      convidado: "Dr. João Gustavo Coelho Pena",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "Previsão de Séries Temporais, Otimização de Processos, Siderurgia, Engenharia Elétrica"
    },
    {
      categoria: "Oficina",
      titulo: "Oficina de Python",
      convidado: "Filipe Chagas",
      local: "Bloco Didático 2 - Sala 15 (Laboratório 1)",
      palavras_chaves: "Programação Python, Desenvolvimento de Software, Oficina Prática, Automação"
    },
    {
      categoria: "Palestra",
      titulo: "CREA - MT",
      convidado: "Marciane Prevedello Curvo",
      local: "Auditório da FAET/UFMT",
      palavras_chaves: "CREA-MT, Engenharia Civil, Segurança do Trabalho, Regulamentação Profissional"
    }
  ],
  "edicao2": [
    {
      categoria: "Minicurso",
      titulo: "Curso Básico de Impressão 3D",
      convidado: "Prof.ª Dr.ª Thais Reggina Kempner",
      local: "Sala 14, Bloco Didático 2/UFMT",
      palavras_chaves: "Automação, Instrumentação, Redes Industriais, Robótica e Tecnologias assistivas."
    },
    {
      categoria: "Minicurso",
      titulo: "Programando microcontroladores PIC com PICKIT 3",
      convidado: "Prof. Dr. Jésus Franco Bueno",
      local: "Laboratório 1, Instituto de Computação/UFMT",
      palavras_chaves: "Automação IOT, Computação e Automação Aplicada, Computação e Automação no Agronegócio, Educação em Engenharia Robótica Aplicável."
    },
    {
      categoria: "Palestra",
      titulo: "Inteligência Artificial Aplicada à Resolução de Problemas de Engenharia",
      convidado: "Prof. Dr. Filipe Matos de Vasconcelos",
      local: "Sala CB02, Instituto de Computação",
      palavras_chaves: "Inteligência Artificial, Otimização, Automação, Modelagem Computacional, Tomada de Decisão."
    },
    {
      categoria: "Minicurso",
      titulo: "Introdução aos FPGAs para aceleração de algoritmos",
      convidado: "Prof. Dr. Oscar Eduardo Anacona Mosquera",
      local: "Sala 15, Bloco Didático 2/UFMT",
      palavras_chaves: "FPGAs, Aceleração, Algoritmos, Hardware Reconfigurável, Processamento Paralelo."
    },
    {
      categoria: "Palestra",
      titulo: "Inteligência Artificial e Metaheurística nas Cidades Inteligentes",
      convidado: "Prof. Dr. André Fonseca",
      local: "Sala CB04, Instituto de Computação",
      palavras_chaves: "Inteligência Artificial, Metaheurística, Cidades Inteligentes, Otimização, Automação Urbana."
    },
    {
      categoria: "Palestra",
      titulo: "Instituto de Pesos e Medidas - IPEM/MT",
      convidado: "Bento Francisco Gomes Bezerra",
      local: "Sala CB02, Instituto de Computação",
      palavras_chaves: "Computação, Automação, engenharia, Palestra, IPEM"
    },
    {
      categoria: "Palestra",
      titulo: "IA: Passado, Presente e Futuro",
      convidado: "Rodrigo Oliveira",
      local: "Auditório do Instituto de Computação/UFMT",
      palavras_chaves: "Computação, Análises, Tecnologias, IA"
    },
    {
      categoria: "Palestra",
      titulo: "Lições e desafios no empreendedorismo na Automação Residencial",
      convidado: "Jorge Luiz",
      local: "Auditório do Instituto de Computação/UFMT",
      palavras_chaves: "Empreendedorismo, Automação Residencial, Inovação, Desafios, Tecnologias Emergentes."
    },
    {
      categoria: "Palestra",
      titulo: "Acelerando a Análise de Dados Financeiros com a InterSystems IRIS: Um Estudo de Caso da Oper Card e as Oportunidades para Novos Talentos de TI",
      convidado: "Celso Ramiro Arakaki",
      local: "Auditório do Instituto de Computação/UFMT",
      palavras_chaves: "Dados Financeiros, Inovação, TI"
    }
  ]
};

export default listaMinicursosPalestras;