import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import eventos1 from "../../../assets/eventos/eventos1.jpg";
import eventos2 from "../../../assets/eventos/eventos2.png";
import eventos3 from "../../../assets/eventos/eventos3.jpg";
import eventos4 from "../../../assets/eventos/eventos4.jpg";
import eventos5 from "../../../assets/eventos/eventos5.jpg";
import eventos6 from "../../../assets/eventos/eventos6.jpg";
import "./Eventos.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const eventImages = [
  eventos6,
  eventos1,
  eventos2,
  eventos3,
  eventos4,
  eventos5,
];

/**
 * Componente Eventos que exibe um carrossel com imagens de eventos passados da SEMAC.
 * Inclui uma breve descrição e link para uma página com informações adicionais sobre as edições anteriores.
 *
 * @component
 * @example
 * // Exemplo de uso básico:
 * <Eventos />
 *
 * @returns {JSX.Element} Seção de eventos passados com um carrossel de imagens e um link para mais detalhes.
 */
const Eventos = () => (
  <div className="eventos-container" id="eventos-anteriores">
    <div className="eventos-header">
      <hr className="border-gradient"></hr>
      <h1>Reviva nossos eventos passados!</h1>
      <span>
        Conheça os eventos anteriores da SEMAC e descubra as inovações e
        tendências que marcaram nossa trajetória.
      </span>
      <span>
        Acesse para explorar fotografias das palestras, workshops e experiências
        passadas.
      </span>
      <div className="eventos-btn-container">
        <Link to="/edicoes-anteriores" className="eventos-btn">
          Confira nossos últimos eventos ➔
        </Link>
      </div>
    </div>

    <div id="eventos" className="eventos-carousel">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl
        showDots
        pauseOnHover
        dotListClass="custom-dot-list-style"
        arrows={true}
        containerClass="eventos-container"
        itemClass="carousel-item"
      >
        {eventImages.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={item}
              className="evento-img"
              alt={`Evento ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Eventos;
