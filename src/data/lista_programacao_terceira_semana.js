/**
 * Lista de programação diária do evento, contendo informações detalhadas sobre cada dia, turnos e eventos programados.
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} data - Data e dia da semana para a programação (ex.: "09/12-SEGUNDA").
 * @property {Array<Object>} eventos - Lista de turnos e seus respectivos eventos para o dia.
 * @property {string} eventos[].dia - Descrição do dia do evento (ex.: "1° DIA").
 * @property {string} eventos[].turno - Período do turno do evento (ex.: "TURNO VESPERTINO").
 * @property {Array<Object>} eventos[].eventos - Lista de eventos programados para o turno.
 * @property {string} eventos[].eventos[].horario - Horário do evento (ex.: "13h - 15h").
 * @property {string} eventos[].eventos[].titulo - Título do evento (ex.: "PALESTRA DE ABERTURA").
 * @property {string} eventos[].eventos[].tipo - Tipo do evento (ex.: "PALESTRA", "MINICURSO", "HACKATON").
 * @property {Array<string>} eventos[].eventos[].palestrantes - Lista de palestrantes do evento.
 *
 * @example
 * const primeiroDia = programacaoDias[0];
 * console.log(primeiroDia.data); // Saída: "09/12-SEGUNDA"
 * console.log(primeiroDia.eventos[0].eventos[0].titulo); // Saída: "PALESTRA DE ABERTURA"
 */
const programacaoDias = [
    {
        data: "09/12-SEGUNDA", 
        eventos: [
            {
                dia: "1° DIA",
                turno: "TURNO VESPERTINO",
                eventos: [
                    { horario: "13h - 15h", titulo: "PALESTRA DE ABERTURA", tipo: "PALESTRA", palestrantes: ["João Silva de Souza Moreira Moura"] },
                    { horario: "15h - 18h", titulo: "MINICURSO DE PYTHON", tipo: "MINICURSO", palestrantes: ["Jonas Silva", "Ricardo Moura"] },
                    { horario: "15h - 18h", titulo: "MINICURSO DE FIGMA", tipo: "MINICURSO", palestrantes: ["Amanda Costa", "Junior Santos"] },
                ]
            },
            {
                dia: "1° DIA",
                turno: "TURNO NOTURNO",
                eventos: [
                    { horario: "19h - 20h", titulo: "COMO A INTELIGÊNCIA ARTIFICIAL ESTÁ IMPACTANDO NA CIBERSEGURANÇA", tipo: "PALESTRA", palestrantes: ["Maria da Silva"] },
                    { horario: "20h - 21h", titulo: "PALESTRA 2", tipo: "PALESTRA", palestrantes: ["João Moura"] },
                    { horario: "21h - 22h", titulo: "PALESTRA 3", tipo: "PALESTRA", palestrantes: ["Jonas Silva", "Ricardo Moura"] },
                    { horario: "22h - 23h", titulo: "PALESTRA 4", tipo: "PALESTRA", palestrantes: ["Elizabeth Santos"] },
                ]
            }
        ]
    },
    {
        data: "10/12-TERÇA", 
        eventos: [
            {
                dia: "2° DIA",
                turno: "TURNO VESPERTINO",
                eventos: [
                    { horario: "13h - 15h", titulo: "PALESTRA DE DESENVOLVIMENTO DE SOFTWARE", tipo: "PALESTRA", palestrantes: ["Fernanda Oliveira"] },
                    { horario: "15h - 18h", titulo: "MINICURSO DE DESIGN UX/UI", tipo: "MINICURSO", palestrantes: ["Paulo Souza"] },
                ]
            },
            {
                dia: "2° DIA",
                turno: "TURNO NOTURNO",
                eventos: [
                    { horario: "19h - 20h", titulo: "PALESTRA SOBRE IA NO MERCADO", tipo: "PALESTRA", palestrantes: ["Gabriel Rocha"] },
                    { horario: "20h - 21h", titulo: "PALESTRA DE CLOUD COMPUTING", tipo: "PALESTRA", palestrantes: ["Ana Beatriz"] },
                    { horario: "21h - 22h", titulo: "PALESTRA DE DEVOPS", tipo: "PALESTRA", palestrantes: ["Ricardo Mendes"] },
                ]
            }
        ]
    },
    {
        data: "11/12-QUARTA", 
        eventos: [
            {
                dia: "3° DIA",
                turno: "TURNO VESPERTINO",
                eventos: [
                    { horario: "13h - 15h", titulo: "PALESTRA DE DESENVOLVIMENTO DE SOFTWARE", tipo: "PALESTRA", palestrantes: ["Fernanda Oliveira"] },
                    { horario: "15h - 18h", titulo: "MINICURSO DE DESIGN UX/UI", tipo: "MINICURSO", palestrantes: ["Paulo Souza"] },
                ]
            },
            {
                dia: "3° DIA",
                turno: "TURNO NOTURNO",
                eventos: [
                    { horario: "19h - 20h", titulo: "PALESTRA SOBRE IA NO MERCADO", tipo: "PALESTRA", palestrantes: ["Gabriel Rocha"] },
                    { horario: "20h - 21h", titulo: "PALESTRA DE CLOUD COMPUTING", tipo: "PALESTRA", palestrantes: ["Ana Beatriz"] },
                    { horario: "21h - 22h", titulo: "PALESTRA DE DEVOPS", tipo: "PALESTRA", palestrantes: ["Ricardo Mendes"] },
                ]
            }
        ]
    },
    {
        data: "12 e 13-QUINTA E SEXTA", 
        eventos: [
            {
                dia: "4° DIA",
                turno: "TURNO VESPERTINO",
                eventos: [
                    { horario: "13h - 15h", titulo: "HACHATON DA SEMAC", tipo: "HACKATON", palestrantes: ["Fernanda Oliveira"] }
                ]
            },
            {
                dia: "5° DIA",
                turno: "TURNO VESPERTINO",
                eventos: [
                    { horario: "13h - 15h", titulo: "HACHATON DA SEMAC", tipo: "HACKATON", palestrantes: ["Fernanda Oliveira"] },
                ]
            }
        ]
    }
];

export default programacaoDias;
