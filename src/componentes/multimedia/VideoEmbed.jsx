import React from 'react';
import './VideoEmbed.css';

const VideoEmbed = ({ videoId }) => (
  <section className="section">
    <h2 className="heading">Descubre más sobre la gestión de productos</h2>
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video de YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="iframe"
      ></iframe>
    </div>
  </section>
);

export default VideoEmbed;
