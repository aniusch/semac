import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarouselMinicursos.css";
import arrowleft from "../../assets/icons/arrow_left_round.svg";
import arrowright from "../../assets/icons/arrow_right_round.svg";
import { useMediaQuery } from "react-responsive";

/**
 * Componente CarouselMinicursos para exibir uma lista de minicursos em um carrossel responsivo.
 * Utiliza o Swiper para navegação e paginação entre slides.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {Array<Object>} props.listaMinicursos - Lista de minicursos a serem exibidos no carrossel.
 * @param {string} props.listaMinicursos[].categoria - Categoria do minicurso (ex.: "Tecnologia", "Ciência").
 * @param {string} props.listaMinicursos[].titulo - Título do minicurso.
 * @param {string} props.listaMinicursos[].convidado - Nome do convidado que ministrará o minicurso.
 * @param {string} props.listaMinicursos[].local - Local onde o minicurso será realizado.
 * @param {string} props.listaMinicursos[].palavras_chaves - Palavras-chave associadas ao minicurso.
 * 
 * @example
 * const minicursos = [
 *   {
 *     categoria: "Tecnologia",
 *     titulo: "Introdução ao React",
 *     convidado: "João da Silva",
 *     local: "Auditório 1",
 *     palavras_chaves: "JavaScript, Frontend, SPA"
 *   },
 *   {
 *     categoria: "Ciência",
 *     titulo: "Laboratório de Física",
 *     convidado: "Maria Pereira",
 *     local: "Laboratório 3",
 *     palavras_chaves: "Experimentos, Física"
 *   }
 * ];
 * 
 * <CarouselMinicursos listaMinicursos={minicursos} />
 *
 * @returns {JSX.Element} Carrossel de minicursos com navegação e paginação.
 */
const CarouselMinicursos = ({listaMinicursos}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="carousel-container">
      <div className="swiper-button-prev">
        <img src={arrowleft} alt="Previous" />
      </div>
      <div className="swiper-button-next">
        <img src={arrowright} alt="Next" />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={isMobile ? 1 : 3}
        loop={true}
        initialSlide={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        spaceBetween={20}
      >
        {listaMinicursos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card">
              <span className={`category ${item.categoria.toLowerCase()}`}>
                {item.categoria}
              </span>
              <h3>{item.titulo}</h3>
              <p>
                <strong>CONVIDADO:</strong> {item.convidado}
              </p>
              <p>
                <strong>LOCAL:</strong> {item.local}
              </p>
              <p>
                <strong>PALAVRAS CHAVES:</strong> {item.palavras_chaves}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMinicursos;
