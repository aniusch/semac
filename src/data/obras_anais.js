/**
 * Lista de obras dos anais do evento, organizada por edição, contendo informações detalhadas de cada obra.
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} edicao - Nome da edição (ex.: "primeira", "segunda").
 * @property {Array<Object>} informacoes - Lista de obras associadas à edição.
 * @property {string} informacoes[].title - Título da obra.
 * @property {string} informacoes[].owner - Nome completo do autor da obra.
 * @property {string} informacoes[].keywords - Palavras-chave associadas à obra.
 * @property {string} informacoes[].link - Link para acessar a obra.
 *
 * @example
 * const primeiraObra = obrasAnais[0].informacoes[0];
 * console.log(primeiraObra.title); // Saída: "TITULO DA OBRA 0"
 */
const obrasAnais = [
    {
        edicao: 'primeira',
        informacoes: [
            {
                title: "A IMPORTÂNCIA DO DESIGN APLICADO EM TECNOLOGIAS ASSISTIVAS PARA ATENDER CRIANÇAS AUTISTAS",
                owner: "Gabriel Rebouças, Izamara Van Der Stock das Neves, Thais Reggina Kempner, Luciana C. L. de Faria Borges, Eunice Pereira dos Santos Nunes",
                keywords: "design, tecnologias assistivas, crianças autistas",
                link: "https://even3.blob.core.windows.net/anais/648877.pdf"
            },
            {
                title: "ABCPROJ – APRENDIZADO BASEADO NA CONSTRUÇÃO DE PROJETOS: PROJETO ULA MONTADA EM PROTOBOARD",
                owner: "Anthony Deives Amorim de Moura, Fabricio Da Rocha Costa, Gabriel Ferrari de Barros, Rafael Souza Honorato, Thiago Vinicius Silva Brandão, Álex Allan Santos De Morais, Jésus Franco Bueno",
                keywords: "aprendizado baseado em projetos, ULA, protoboard",
                link: "https://even3.blob.core.windows.net/anais/648896.pdf"
            },
            {
                title: "ABCPROJ - PROJETO ULA COM TECLADO VIA ARDUINO",
                owner: "Jésus Franco Bueno, Kadu Guilherme Neto Macedo, Gabriel Nodari Pozer, Filipe Godoy, Mateus Malan Soares Ferreira, Ygor Nunes da Silva",
                keywords: "ULA, teclado, Arduino",
                link: "https://even3.blob.core.windows.net/anais/648886.pdf"
            },
            {
                title: "AERODESIGN",
                owner: "Laura Negreiros Naves, Igor Fernando Miranda, Mauro Lúcio Naves Oliveira, Jésus Franco Bueno, João Bosco de Siqueira",
                keywords: "aerodesign, engenharia, aviação",
                link: "https://even3.blob.core.windows.net/anais/648554.pdf"
            },
            {
                title: "AJUSTE MULTIPARAMÉTRICO DE CONTROLADORES PID COM 2 GRAUS DE LIBERDADE VIA PSO",
                owner: "Vitor Custódio Chagas, João Pedro Madeira Araujo, João Pena, Daniel Miranda Cruz",
                keywords: "controladores PID, PSO, ajuste multiparamétrico",
                link: "https://even3.blob.core.windows.net/anais/648904.pdf"
            },
            {
                title: "ANÁLISE QUANTITATIVA PARA VIABILIZAR A IMPLEMENTAÇÃO DE UM ARMÁRIO INTELIGENTE COM TECNOLOGIA RFID NA FAENG",
                owner: "Narciso Avelino Ermita de Oliveira, Aldalice Rodrigues Dias, João Pedro Madeira Araujo, Douglas Guilherme Martins Mendes, Carla Verônica da S. Soares, Fábio N. dos Santos",
                keywords: "análise quantitativa, armário inteligente, RFID",
                link: "https://even3.blob.core.windows.net/anais/648989.pdf"
            },
            {
                title: "APLICAÇÃO DO GRÁFICO DE CONTROLE DE SHEWHART NO MONITORAMENTO DA MALHA DE CONTROLE DE TEMPERATURA DO TEP",
                owner: "Gabriela Simonete Demarqui, João Pedro Madeira Araujo, Aldalice Rodrigues Dias, João Pena, Daniel Miranda Cruz",
                keywords: "gráfico de controle Shewhart, controle de temperatura, TEP",
                link: "https://even3.blob.core.windows.net/anais/648627.pdf"
            },
            {
                title: "AUTOMATIZAÇÃO DA ILUMINAÇÃO RESIDENCIAL APLICADA A UM PROTÓTIPO DE PEQUENA ESCALA",
                owner: "Gabriely Nascimento Souza, Maria Eduarda Oliveira",
                keywords: "automatização, iluminação residencial, protótipo",
                link: "https://even3.blob.core.windows.net/anais/648752.pdf"
            },
            {
                title: "CENTRAL DE AUTOMAÇÃO RESIDENCIAL DE BAIXO CUSTO",
                owner: "Jorge Luiz, Thais Reggina Kempner",
                keywords: "automação residencial, baixo custo",
                link: "https://even3.blob.core.windows.net/anais/648605.pdf"
            },
            {
                title: "DESENVOLVIMENTO DE UM SISTEMA AUTOMATIZADO PARA A PROTEÇÃO DE EQUIPAMENTOS EM ÁREA COM RISCO DE EXPLOSÃO NA INDÚSTRIA DE BENEFICIAMENTO DE GRÃOS",
                owner: "Narciso Avelino Ermita de Oliveira, Rafael Zamodzki",
                keywords: "proteção de equipamentos, risco de explosão, automação industrial",
                link: "https://even3.blob.core.windows.net/anais/648591.pdf"
            },
            {
                title: "DIRETRIZES PARA O DESENVOLVIMENTO DE BAIXO CUSTO DE UM ROBÔ TERAPÊUTICO INCLUSIVO",
                owner: "Dayanni Elias, Nathalia David Borges, Kamylla Milena Voltolini Dos Santos, Thais Reggina Kempner, Luciana C. L. de Faria Borges, Eunice Pereira dos Santos Nunes",
                keywords: "robô terapêutico, baixo custo, inclusão",
                link: "https://even3.blob.core.windows.net/anais/648518.pdf"
            },
            {
                title: "ESTRATÉGIA DE CONTROLE DE NÍVEL DE CALDEIRA A TRÊS ELEMENTOS",
                owner: "Dhenner Eduardo Sossai Rocha, Thais Reggina Kempner, João Pena",
                keywords: "controle de nível, caldeira, três elementos",
                link: "https://even3.blob.core.windows.net/anais/648939.pdf"
            },
            {
                title: "IMPORTÂNCIA DA INSERÇÃO DE MENINAS E MULHERES NO DESENVOLVIMENTO DO ROBÔ OTTO",
                owner: "Kamylla Milena Voltolini Dos Santos, Fernanda Andrade Pereira Marques, Thais Reggina Kempner, Luciana C. L. de Faria Borges, Eunice Pereira dos Santos Nunes",
                keywords: "inclusão feminina, robô Otto, educação",
                link: "https://even3.blob.core.windows.net/anais/648451.pdf"
            },
            {
                title: "PERSONALIZAÇÃO DE CARTÕES RFID PARA O DESENVOLVIMENTO DA COMUNICAÇÃO E APRENDIZADO DE CRIANÇAS COM AUTISMO",
                owner: "Aldalice Rodrigues Dias, Thais Reggina Kempner, Luciana C. L. de Faria Borges, Eunice Pereira dos Santos Nunes",
                keywords: "RFID, autismo, comunicação",
                link: "https://even3.blob.core.windows.net/anais/648622.pdf"
            },
            {
                title: "PROJETO EMPRESA JUNIOR - INOVA JUNIOR",
                owner: "Isabella Pio Medeiros Francisco, Samara Brito Pereira de Carvalho, Guilherme Amaral, Daniel Miranda Cruz",
                keywords: "empresa júnior, inovação, educação",
                link: "https://even3.blob.core.windows.net/anais/648910.pdf"
            },
            {
                title: "PROJETO JOGO INTERATIVO EDUCACIONAL 'SNEAK'",
                owner: "Hélder Schneider Frota, Kauê Santana Passos, Téo Mattos Pereira da Silva, Gabriel Carvalho Soares, Jésus Franco Bueno",
                keywords: "jogo interativo, educação, Sneak",
                link: "https://even3.blob.core.windows.net/anais/648906.pdf"
            },
            {
                title: "PROJETO ULA SIMULADA",
                owner: "Daniel Martins Zamarioli, Fábio Chagas Barbosa Junior, Victor Daniel Mohr Steffens, Enrico Soza de Lima, Tarcisio Jose Santana Rodrigues, Gabriel Martins de Morais, Jésus Franco Bueno",
                keywords: "ULA, simulação, protótipo",
                link: "https://even3.blob.core.windows.net/anais/648911.pdf"
            },
            {
                title: "PROTÓTIPO DE BRAÇO ROBÓTICO",
                owner: "Gabriely Nascimento Souza, João Eduardo de Lara Ferreira",
                keywords: "braço robótico, protótipo, automação",
                link: "https://even3.blob.core.windows.net/anais/648754.pdf"
            },
            {
                title: "RESULTADO DO USO DO ROBÔ OTTO EM TERAPIAS COM CRIANÇAS AUTISTAS",
                owner: "Fernanda Andrade Pereira Marques, Emelyn Montevechi Fagundes, Izamara Van Der Stock das Neves, Thais Reggina Kempner, Luciana C. L. de Faria Borges, Eunice Pereira dos Santos Nunes",
                keywords: "robô Otto, terapia, autismo",
                link: "https://even3.blob.core.windows.net/anais/648480.pdf"
            },
            {
                title: "REDES DE SENSORES SEM FIO NA IRRIGAÇÃO DE PRECISÃO",
                owner: "Guilherme Tabosa Lopes, Guilherme Amaral, Thais Reggina Kempner",
                keywords: "sensores sem fio, irrigação, precisão",
                link: "https://even3.blob.core.windows.net/anais/648849.pdf"
            }
        ]
    },
    {
        edicao: 'segunda',
        informacoes: [
            {
                title: "A RELEVÂNCIA DOS MOVIMENTOS DOS ROBÔS NO DESENVOLVIMENTO PSICOMOTOR DE CRIANÇAS COM TEA",
                owner: "Fernanda Andrade Pereira Marques, Christian Pierre Pereira Barros, Nathalia David Borges, Thais Reggina Kempner, Eunice Nunes, Luciana C. L. de Faria Borges",
                keywords: "robôs, desenvolvimento psicomotor, crianças TEA",
                link: "https://even3.blob.core.windows.net/anais/796480.pdf"
            },
            {
                title: "ALÉM DOS NÚMEROS: O PAPEL DA INTELIGÊNCIA DE DADOS PARA O ESTUDO DE QUEIMADAS NO ESTADO DE MATO GROSSO",
                owner: "Gustavo Murilo do Valle Campos, João Pena",
                keywords: "inteligência de dados, queimadas, Mato Grosso",
                link: "https://even3.blob.core.windows.net/anais/796079.pdf"
            },
            {
                title: "ALTERAÇÃO DE ESTRUTURA DO AEROPÊNDULO",
                owner: "Vitor Lopes Simeoni, Fernanda Andrade Pereira Marques, Kamylla Milena Voltolini Dos Santos, Vitor Bonvechio dos Santos, Rafael Zamodzki",
                keywords: "aeropêndulo, estrutura, engenharia",
                link: "https://even3.blob.core.windows.net/anais/798567.pdf"
            },
            {
                title: "ANÁLISE COMPARATIVA ENTRE AS REDES DE COMUNICAÇÃO MODBUS E PROFIBUS PARA INTEGRAÇÃO ENTRE INVERSORES DE FREQUÊNCIA, CLPS E SISTEMAS SUPERVISÓRIOS",
                owner: "Matheus Antônio Storch, Luiz Eduardo Oliveira de Morais, Thais Reggina Kempner",
                keywords: "Modbus, Profibus, integração de sistemas",
                link: "https://even3.blob.core.windows.net/anais/799031.pdf"
            },
            {
                title: "APLICAÇÃO DE CARTÕES RFID EDUCACIONAIS NA TERAPIA DE PARA CRIANÇAS COM AUTISMO: EXPLORANDO A DIVERSIDADE DE IMAGENS NA COMUNICAÇÃO AUMENTATIVA E ALTERNATIVA",
                owner: "Aldalice Rodrigues Dias, Debora Mateus Camargo de Cerqueira, Maria Vittória Sousa Rodrigues Palma, Thais Reggina Kempner, Luciana C. L. de Faria Borges, Eunice Nunes",
                keywords: "RFID educacional, autismo, comunicação alternativa",
                link: "https://even3.blob.core.windows.net/processos/cfbdc128236e4d378e90.pdf"
            },
            {
                title: "COMPARAÇÃO ENTRE CONVERSOR BUCK-BOOST CONVENCIONAL E INTERCALADO EM UMA UGD",
                owner: "Matheus Antônio Storch, Vitor Lopes Simeoni, Rafael Zamodzki",
                keywords: "conversor Buck-Boost, UGD, eletrônica",
                link: "https://even3.blob.core.windows.net/anais/797421.pdf"
            },
            {
                title: "DESENVOLVIMENTO APLICADO DE REDE WI-FI FORTIAP MODO BRIDGE",
                owner: "Pedro Wilmann, Fabrício Carvalho, Andre Valente do Couto",
                keywords: "rede Wi-Fi, FortiAP, modo bridge",
                link: "https://even3.blob.core.windows.net/anais/796734.pdf"
            },
            {
                title: "ESTRATÉGIA DE CONTROLE PARA UM SISTEMA DE COMPRESSÃO",
                owner: "Gabriel Pedroso de Almeida, Rafael Sartori",
                keywords: "sistema de compressão, controle, engenharia",
                link: "https://even3.blob.core.windows.net/anais/798967.pdf"
            },
            {
                title: "IMERSÃO INTERATIVA: A CONTRIBUIÇÃO DA REALIDADE AUMENTADA NA APRESENTAÇÃO DO ROBÔ OTTO",
                owner: "Gabriel José do Amaral Schuina, Gabriel Rebouças, Gabriely Barbosa, Gabriely Nascimento Souza, Nicolas Gabriel Meneses de Jesus, Thais Reggina Kempner, Luciana C. L. de Faria Borges, Renan Vinicius Aranha",
                keywords: "realidade aumentada, robô Otto, interação",
                link: "https://even3.blob.core.windows.net/anais/796774.pdf"
            },
            {
                title: "IMPLEMENTAÇÃO DE UM SERVIDOR DE BACKUP INTELIGENTE COM CAPACIDADE DE ARMAZENAMENTO LOCAL E NA NUVEM, UTILIZANDO BACULA E BTRFS NO LINUX: UM ESTUDO DE CASO",
                owner: "Gustavo Murilo do Valle Campos, Guilherme de Oliveira Tiburcio, César Eduardo Guarienti, Gracyeli Santos Souza Guarienti",
                keywords: "backup inteligente, armazenamento em nuvem, Bacula, BTRFS",
                link: "https://even3.blob.core.windows.net/anais/797504.pdf"
            },
            {
                title: "LORAMESH: UMA SOLUÇÃO DE REDE SEM FIO DE BAIXA POTÊNCIA E DE LONGO ALCANCE PARA MELHORIA DE APLICAÇÕES IOT",
                owner: "Christian Pierre Pereira Barros, Kleber Benedito Siqueira De Faria Junior, Vinicius Ourives, Thais Reggina Kempner",
                keywords: "rede sem fio, baixa potência, IoT",
                link: "https://even3.blob.core.windows.net/anais/796436.pdf"
            },
            {
                title: "MANUTENÇÃO PREDITIVA EM MOTORES ELÉTRICOS TRIFÁSICOS UTILIZANDO REDES NEURAIS ARTIFICIAIS E PROCESSAMENTO DE SINAIS",
                owner: "Steferson Ryan Venâncio Barbosa Ferreira, Fillipe Matos De Vasconcelos",
                keywords: "manutenção preditiva, motores elétricos, redes neurais",
                link: "https://even3.blob.core.windows.net/anais/797717.pdf"
            },
            {
                title: "OTIMIZAÇÃO DE PROJETOS COM IMPRESSÃO 3D: UMA PERSPECTIVA DETALHADA SOBRE TESTES DE FILAMENTOS",
                owner: "Gabriel Ribeiro Bastos de Sousa Reboucas, Aldalice Rodrigues Dias, Fernanda Andrade Pereira Marques, Nathalia David Borges, Thais Reggina Kempner, Eunice Nunes, Luciana C. L. de Faria Borges",
                keywords: "impressão 3D, testes de filamentos, otimização de projetos",
                link: "https://even3.blob.core.windows.net/anais/796482.pdf"
            },
            {
                title: "PADRÃO DE COMUNICAÇÃO ISOBUS: A REVOLUÇÃO NA COMUNICAÇÃO DE EQUIPAMENTOS AGRÍCOLAS PARA MAIOR EFICIÊNCIA E PRODUTIVIDADE",
                owner: "Gabriely Nascimento Souza, Maria Eduarda Oliveira, Thais Reggina Kempner",
                keywords: "ISOBUS, comunicação agrícola, eficiência",
                link: "https://even3.blob.core.windows.net/anais/796748.pdf"
            },
            {
                title: "PROJETO CURSO DE ARDUÍNO",
                owner: "Samara Brito Pereira de Carvalho, Isabella Pio Medeiros Francisco, Diana Da Cunha Rijsdijk, Lorena Monteiro Milhomem Santos Curvo, Rafael De Jesus Colvara, Rafael Sartori",
                keywords: "curso, Arduino, projeto educacional",
                link: "https://even3.blob.core.windows.net/anais/799270.pdf"
            },
            {
                title: "PROJETO DE AUTOMAÇÃO DO INSTITUTO DE LINGUAGENS",
                owner: "Samara Brito Pereira de Carvalho, Isabella Pio Medeiros Francisco, Elias Rodrigues Ferreira Junior, Guilherme Kallyl Possmoser Ribeiro, Matheus Marques De Souza",
                keywords: "automação, instituto de linguagens, projeto",
                link: "https://even3.blob.core.windows.net/anais/799263.pdf"
            },
            {
                title: "PROJETO JOGO INTERATIVO EDUCACIONAL 'SNEAK'",
                owner: "Hélder Schneider Frota, Jésus Franco Bueno, Felipe Gabriel Costa da Silva, Vitor Guilherme Rodrigues Paes Ramos, Téo Mattos Pereira da Silva, Erick Sebba",
                keywords: "jogo interativo, Sneak, educação",
                link: "https://even3.blob.core.windows.net/anais/797423.pdf"
            },
            {
                title: "PROJETO MENINAS TECNOLÓGICAS",
                owner: "Maria Vittória Sousa Rodrigues Palma, Guilherme Henrique Ribeiro, Carolina Sartori, Haissa Gabrielle Ribeiro Gomes de Arruda, Gabriela Barbalho Batista, Melissa Maria Souza de Carvalho, Maria Clara Itacaramby de Castro, Jullya Castro Santos, Mylena Ágatha Martins Fernandez, Gracyeli Santos Souza Guarienti",
                keywords: "meninas tecnológicas, inclusão, projeto educacional",
                link: "https://even3.blob.core.windows.net/anais/797602.pdf"
            },
            {
                title: "PROPOSTA DE MELHORIA DO PROCESSO DE AGENDAMENTO DE INSPEÇÃO DO IPEM/MT BASEADA EM BPM",
                owner: "Emelyn Montevechi Fagundes, João Victor Terres Nonato, Eduardo Fernandes Bruno dos Reis, Jonatham Júnior Teixeira Magalhães, Joyce Aline, Aline F. N. C. Moro",
                keywords: "agendamento, inspeção, BPM",
                link: "https://even3.blob.core.windows.net/anais/796905.pdf"
            },
            {
                title: "RESUMO DE TCC: A EVOLUÇÃO DA VPN CORPORATIVA IMPLANTAÇÃO DE ADVPN",
                owner: "Pedro Wilmann, Luiz Vinícius Silva, Fabrício Carvalho, Andre Valente do Couto",
                keywords: "VPN corporativa, ADVPN, segurança",
                link: "https://even3.blob.core.windows.net/anais/796733.pdf"
            },
            {
                title: "TURING TOWER - SISTEMA EMBARCADO PARA CONTROLE E OTIMIZAÇÃO DE MÚLTIPLOS ELEVADORES ARTIGO SEMAC2024",
                owner: "Luiz Felipe Da Silva Marian, Hondenis Santos Garcia, André Soares Bottari, Fábio Schmitz Ruver",
                keywords: "Turing Tower, controle de elevadores, otimização",
                link: "https://even3.blob.core.windows.net/anais/799300.pdf"
            },
            {
                title: "TURING TOWER - SISTEMA EMBARCADO PARA CONTROLE E OTIMIZAÇÃO DE MÚLTIPLOS ELEVADORES RESUMO SEMAC2024",
                owner: "Luiz Felipe Da Silva Marian, Hondenis Santos Garcia, Fábio Schmitz Ruver, André Soares Bottari",
                keywords: "Turing Tower, controle de elevadores, resumo",
                link: "https://even3.blob.core.windows.net/anais/799227.pdf"
            },
            {
                title: "UMA ABORDAGEM BASEADA EM LÓGICA FUZZY PARA CONTROLE VOLT/VAR EM REDES DE DISTRIBUIÇÃO DE ENERGIA ELÉTRICA",
                owner: "João Antonio Elias Aguiar, Fillipe Matos De Vasconcelos",
                keywords: "lógica fuzzy, controle Volt/VAR, energia elétrica",
                link: "https://even3.blob.core.windows.net/anais/797375.pdf"
            },
            {
                title: "UMA ANÁLISE DOS INCÊNDIOS NOS PRINCIPAIS BIOMAS DE MATO GROSSO - UMA PERSPECTIVA POR MEIO DE DATA WAREHOUSE",
                owner: "Gustavo Murilo do Valle Campos, João Pena, Gracyeli Santos Souza Guarienti, Guilherme de Oliveira Tiburcio",
                keywords: "incêndios, biomas, data warehouse",
                link: "https://even3.blob.core.windows.net/anais/797115.pdf"
            },
            {
                title: "USO DO ARDUINO PARA CONTROLE DE SIMULAÇÕES COMPUTACIONAIS UTILIZANDO TÉCNICAS EM ESPAÇOS DE ESTADOS",
                owner: "Matheus Antônio Storch, Rafael Zamodzki",
                keywords: "Arduino, simulações computacionais, espaços de estados",
                link: "https://even3.blob.core.windows.net/anais/799032.pdf"
            },
            {
                title: "VISÃO COMPUTACIONAL E APRENDIZADO DE MÁQUINA COM OPENCV E SKLEARN PARA DETECÇÃO DE OBJETOS DEFEITUOSOS",
                owner: "Luiz Eduardo Oliveira de Morais, Aldalice Rodrigues Dias, Vitor Bonvechio dos Santos, Matheus Marques De Souza, Fillipe Matos De Vasconcelos",
                keywords: "visão computacional, aprendizado de máquina, OpenCV, detecção de defeitos",
                link: "https://even3.blob.core.windows.net/anais/797240.pdf"
            },
            {
                title: "VANTAGENS DA APLICAÇÃO DA NORMA IEC 61850 EM REDES DE COMUNICAÇÃO PARA O SCADA DE SUBESTAÇÕES",
                owner: "Samara Brito Pereira de Carvalho, Isabella Pio Medeiros Francisco, Thais Reggina Kempner",
                keywords: "norma IEC 61850, comunicação SCADA, subestações",
                link: "https://even3.blob.core.windows.net/anais/799244.pdf"
            }
        ]
    }
];

export default obrasAnais;

