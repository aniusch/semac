import React, { useState } from "react";
import "./Palestrantes.css";
import ArrowRight from "../../../assets/icons/arrow_right.svg";
import ArrowLeft from "../../../assets/icons/arrow_left.svg";
import Palestrantes_list from "../../../data/lista_palestrantes";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ device, next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "8px",
        paddingBottom: "10px",
        position: "absolute",
        top: `${device === "mobile" ? "-10%" : "-15%"}`,
        right: "0",
        alignItems: "end",
      }}
    >
      <button
        className={`btn ${currentSlide === 0 ? "disabled" : ""}`}
        onClick={() => previous()}
      >
        <img src={ArrowLeft} alt="Arrow Left" />
      </button>
      <button
        className={`btn ${
          device === "desktop"
            ? currentSlide === 33
              ? "disabled"
              : ""
            : currentSlide === 36
            ? "disabled"
            : ""
        }`}
        onClick={() => next()}
      >
        <img src={ArrowRight} alt="Arrow Right" />
      </button>
    </div>
  );
};

const Palestrantes = () => {
  const [autoPlay, setAutoPlay] = useState(true); 

  const handleInteractionStart = () => {
    setAutoPlay(false);
  };

  const handleInteractionEnd = () => {
    setAutoPlay(true);
  };

  const device = (() => {
    if (useMediaQuery({ query: "(max-width: 768px)" })) return "mobile";
    else return "desktop";
  })();

  return (
    <div id="palestrantes" className="palestrantes">
      <div className="column-container" id="texto e seta">
        {device === "desktop" ? (
          <div className="column-container">
            <div className="column">
              <h1 className="title" id="texto">
                Palestrantes
              </h1>
              <p style={{ padding: 0, margin: 0 }}>
                Conheça nossa equipe recheada de especialistas nas áreas de
                computação e automação e prepare-se para insights inovadores e
                palestras enriquecedoras!
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="column-mobile">
              <h1 className="title" id="texto">
                Palestrantes
              </h1>
              <p>
                Conheça nossa equipe recheada de especialistas nas áreas de
                computação e automação e prepare-se para insights inovadores e
                palestras enriquecedoras!
              </p>
            </div>
          </div>
        )}
      </div>
      <div
        style={{ position: "relative" }}
        onMouseEnter={handleInteractionStart} 
        onMouseLeave={handleInteractionEnd} 
      >
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={autoPlay} 
          keyBoardControl={true}
          partialVisible={false}
          arrows={false}
          pauseOnHover={false}
          shouldResetAutoplay={false}
          containerClass="palestrantes_list"
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup device={device} />}
          deviceType={device}
          dotListClass="custom-dot-list-style"
          itemClass="palestrante"
          beforeChange={handleInteractionStart} 
          afterChange={handleInteractionEnd} 
        >
          {Palestrantes_list.map((palestrante) => {
            return (
              <div key={palestrante.nome} className="palestrante">
                <img
                  className="palestrante-img"
                  src={palestrante.imagem}
                  alt={palestrante.nome}
                />
                <p
                  style={{ margin: "5px 5px 0 0" }}
                  className="palestrante-nome"
                >
                  {palestrante.nome}
                </p>
                <p style={{ margin: "5px 5px 0 0" }}>{palestrante.descricao}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Palestrantes;
