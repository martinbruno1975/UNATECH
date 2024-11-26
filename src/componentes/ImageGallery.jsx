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
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.link)} style={{ cursor: 'pointer' }}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
