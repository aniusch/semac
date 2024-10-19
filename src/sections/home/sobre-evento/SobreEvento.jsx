import './SobreEvento.css';
import iconMini from "../../../assets/icons/iconminicurso.svg";
import iconPal from "../../../assets/icons/iconpalestra.svg";
import iconPain from "../../../assets/icons/iconpaineis.svg";
import iconNet from "../../../assets/icons/iconnetwork.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Arrow from "../../../assets/icons/arrow_sobre.svg";

const categorias = [
    {
        id: 'minicursos',
        icon: iconMini,
        alt: 'Icon_Minicursos',
        titulo: 'Minicursos',
        descricao: 'Aprenda e desenvolva novas habilidades com minicursos especializados',
        corCirculo: '#02A8F6',
    },
    {
        id: 'palestras',
        icon: iconPal,
        alt: 'Icon_Palestras',
        titulo: 'Palestras',
        descricao: 'Inspire-se com líderes e especialistas discutindo as últimas tendências',
        corCirculo: '#9849FF',
    },
    {
        id: 'paineis',
        icon: iconPain,
        alt: 'Icon_Paineis',
        titulo: 'Painéis',
        descricao: 'Participe de debates interativos sobre desafios e oportunidades atuais',
        corCirculo: '#9849FF',
    },
    {
        id: 'network',
        icon: iconNet,
        alt: 'Icon_Network',
        titulo: 'Network',
        descricao: 'Amplie sua rede de contatos e crie novas oportunidades de colaboração',
        corCirculo: '#02A8F6',
    },
];

const responsive = {
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
        carouselState: { currentSlide },
    } = rest;
    return (
        <div>
            <button className={`btnArrow left ${currentSlide === 0 ? "disabled" : ""}`} onClick={() => previous()}>
                <img src={Arrow} alt="Arrow-Left" />
            </button>
            <button className={`btnArrow right ${currentSlide === 3 ? "disabled" : ""}`} onClick={() => next()}>
                <img src={Arrow} alt="Arrow-Right" />
            </button>
        </div>
    );
};

const SobreEvento = () => {
    return (
        <div id='sobre-evento' className="sobre">
            <section className="txt">
                <div className="retangulo">
                </div>
                <h1>Sobre</h1>
                <p>A SEMAC – Semana das Engenharias de Automação e Computação da UFMT – é um evento anual que promove a troca de
                    conhecimentos e experiências entre estudantes, profissionais e entusiastas da área tecnológica, oferecendo uma
                    plataforma única para aprendizado, inovação e networking.</p>
            </section>

            <section className="icons">
                <div className='apenas-Desktop'>
                    <div className="categorias">
                        {categorias.map((categoria) => (
                            <div className="iconesCategorias" id={categoria.id} key={categoria.id}>
                                <div className="icone-circulo" style={{ backgroundColor: categoria.corCirculo }}>
                                    <img src={categoria.icon} alt={categoria.alt} className={`icone_${categoria.id}`} />
                                </div>
                                <div className="textos">
                                    <h1>{categoria.titulo}</h1>
                                    <p>{categoria.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='apenas-Mobile'>
                    <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true} pauseOnHover={true} shouldResetAutoplay={true}>
                        {categorias.map((categoria) => (
                            <div className="iconesCategorias" id={categoria.id} key={categoria.id}>
                                <div className="icone-circulo" style={{ backgroundColor: categoria.corCirculo }}>
                                    <img src={categoria.icon} alt={categoria.alt} className={`icone_${categoria.id}`} />
                                </div>
                                <div className="textos">
                                    <h1>{categoria.titulo}</h1>
                                    <p>{categoria.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default SobreEvento;
