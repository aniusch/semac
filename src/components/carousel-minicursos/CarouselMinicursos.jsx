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
import listaMinicursosPalestras from "../../data/lista_minicursos_palestras";

const CarouselMinicursos = () => {
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
        {listaMinicursosPalestras.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card">
              <span
                className={`category ${item.categoria.toLowerCase()}`}
              >
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
              {/* <a href="#veja-mais" className="veja-mais">
                Veja mais!
              </a> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMinicursos;
