import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "./GaleriaEdicao.css";

/**
 * Componente GaleriaEdicao para exibir uma galeria de imagens com funcionalidade de zoom em uma lightbox.
 * Permite a visualização de imagens em tela cheia ao clicar em uma delas.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {Array<Object>} props.imagens - Lista de imagens para exibição na galeria.
 * @param {string} props.imagens[].src - URL da imagem.
 * @param {string} props.imagens[].size - Tamanho da imagem para definir estilos (ex.: "small", "medium", "large").
 * 
 * @example
 * const imagens = [
 *   { src: "https://example.com/image1.jpg", size: "small" },
 *   { src: "https://example.com/image2.jpg", size: "large" },
 *   { src: "https://example.com/image3.jpg", size: "medium" }
 * ];
 * 
 * <GaleriaEdicao imagens={imagens} />
 *
 * @returns {JSX.Element} Galeria de imagens com suporte a zoom e visualização em lightbox.
 */
const GaleriaEdicao = ({ imagens }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="galeria-edicao-container">
      {imagens.map((image, index) => (
        <div
          key={index}
          className={`galeria-edicao-item img-${image.size}`}
          onClick={() => handleImageClick(index)}
        >
          <img
            src={image.src}
            alt={`gallery-item-${index}`}
            className="galeria-edicao-image"
          />
        </div>
      ))}

      <Lightbox
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        open={open}
        close={() => setOpen(false)}
        slides={imagens.map((image) => ({ src: image.src }))}
        index={currentIndex}
      />
    </div>
  );
};

export default GaleriaEdicao;
