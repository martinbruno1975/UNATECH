import React from 'react';

const VideoEmbed = ({ videoId }) => (
  <section>
    <h2>Video de nuestra empresa</h2>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="Video de YouTube"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </section>
);

export default VideoEmbed;
