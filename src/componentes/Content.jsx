import React from 'react';
import AboutUs from './AboutUs';
import ImageGallery from './multimedia/ImageGallery';
import VideoEmbed from './multimedia/VideoEmbed';
import ContactoUbiacion from './contact/ContactoUbicacion';

const Content = () => (
  <main style={styles.main}>
    <AboutUs />
    <ImageGallery />
    <VideoEmbed videoId="9H6kc576NTg" />
    <ContactoUbiacion />
  </main>
);

const styles = {
  main: {
    padding: '2em',
    backgroundColor: '#222',
    color: '#fff',
    /*minHeight: '60vh',*/
  },
};

export default Content;
