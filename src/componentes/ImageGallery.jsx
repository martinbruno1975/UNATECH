import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageGallery.css';

// Cambiamos cada elemento de `images` para que sea un objeto con `src` y `alt`.
const images = [
  { src: "/images/extras/local1.jpg", alt: "Imagen del local HUNATech" },
  { src: "/images/extras/personal1.jpg", alt: "Imagen de personal trabajando" },
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

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;