import React from 'react';
import './MapEmbed.css';

const MapEmbed = () => (
  <section className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.733126697044!2d-58.63824897653316!3d-34.61827509749006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses!2sar!4v1731099507776!5m2!1ses!2sar"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Ubicación de la Empresa"
    ></iframe>
  </section>
);

export default MapEmbed;
