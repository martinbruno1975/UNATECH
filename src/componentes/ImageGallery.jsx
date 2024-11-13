import React from 'react';

const images = [
  { src: '/path/to/image1.jpg', alt: 'Imagen del local 1', link: 'https://youtu.be/video1' },
  { src: '/path/to/image2.jpg', alt: 'Imagen del local 2', link: 'https://youtu.be/video2' },
];

const ImageGallery = () => (
  <section id="gallery">
    <h2>Galería</h2>
    <div style={styles.gallery}>
      {images.map((img, index) => (
        <a href={img.link} target="_blank" rel="noopener noreferrer" key={index}>
          <img src={img.src} alt={img.alt} style={styles.image} />
        </a>
      ))}
    </div>
  </section>
);

const styles = {
  gallery: { display: 'flex', gap: '1em' },
  image: { width: '200px', height: 'auto' },
};

export default ImageGallery;
