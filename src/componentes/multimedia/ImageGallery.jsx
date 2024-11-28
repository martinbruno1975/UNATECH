import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageGallery.css';

const images = [
  { src: "/images/extras/local1.jpg", alt: "Imagen del local HUNATech", link: "https://www.youtube.com/watch?v=DvkOWsMnkcw" },
  { src: "/images/extras/personal1.jpg", alt: "Imagen de personal trabajando", link: "https://www.youtube.com/watch?v=rwTbI9nHTkI" },
  { src: "/images/extras/logistica.PNG", alt: "Imagen genérica", link: "https://www.youtube.com/watch?v=OqYLg2q6s1g" },
];

const ImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleImageClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div id="galeria" style={{ width: '60%', maxWidth: '100rem', margin: '60px auto' }}>
      <h1 className="titulo">Galería de Imagenes</h1>
      <p>En esta sección podrás visualizar las distintas áreas que componen nuestra empresa para gestionar la comercialización y distribución de productos tecnológicos. Hacé click en cada imagen para ver un video explicativo.</p>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.link)} style={{ cursor: 'pointer' }}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto', cursor:'pointer' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

/*
const styles = {
  titulo: {display: 'flex', 
    justifyContent: 'space-between',
    backgroundColor: '#FFA500',
    alignItems: 'center',
    alignContent: 'center'
  }
};
*/

export default ImageGallery;
