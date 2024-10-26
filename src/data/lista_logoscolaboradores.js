import Amaggi from "../assets/colaboradores/amaggi.png";
import Nuvem from "../assets/colaboradores/nuvem.svg";
import RedBalloon from "../assets/colaboradores/red_balloon.png";
import Aromasil from "../assets/colaboradores/aromasil.png";
import Aptum from "../assets/colaboradores/aptum.png";
import CasaViva from "../assets/colaboradores/casa_viva.png";
import DablioPresentes from "../assets/colaboradores/dablio_presentes.png";
import InfoCorp from "../assets/colaboradores/infocorp.png";
import NetSystemsTech from "../assets/colaboradores/net_systems_tech.png";
import OperCard from "../assets/colaboradores/oper_card.png";
import Sicredi from "../assets/colaboradores/sicredi.png";
import ZingerSkills from "../assets/colaboradores/zinger_skills.png";

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
const empresasLogos = [
    { href: "https://www.amaggi.com.br/", src: Amaggi, alt: "Logo Amaggi" },
    { href: "https://nuvem.net/", src: Nuvem, alt: "Logo Nuvem" },
    { href: "https://redballoon.com.br/", src: RedBalloon, alt: "Logo RedBalloon" },
    { href: "https://www.aromasil.com.br/", src: Aromasil, alt: "Logo Aromasil" },
    { href: "https://mkt.aptum.com.br/aptum", src: Aptum, alt: "Logo Aptum" },
    { href: "https://flow.page/casavivacba", src: CasaViva, alt: "Logo Casa Viva" },
    { href: "https://dabliopresentes.com.br/", src: DablioPresentes, alt: "Logo Dablio Presentes" },
    { href: "https://infocorpjr.com.br/", src: InfoCorp, alt: "Logo InfoCorp" },
    { href: "https://www.netsystemtecnologia.com.br/site2021/index.html", src: NetSystemsTech, alt: "Logo Net Systems Tech" },
    { href: "https://opercard.com.br/", src: OperCard, alt: "Logo Oper Card" },
    { href: "https://www.sicredi.com.br/", src: Sicredi, alt: "Logo Sicredi" },
    { href: "https://escolazinger.com.br/", src: ZingerSkills, alt: "Logo Zinger Skills" }
];

export default empresasLogos;