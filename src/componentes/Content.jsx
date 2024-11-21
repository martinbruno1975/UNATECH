import React from 'react';
import AboutUs from './AboutUs';
import ImageGallery from './ImageGallery';
import VideoEmbed from './VideoEmbed';
import ContactInfo from './ContactInfo';
import MapEmbed from './MapEmbed';
import ContactoUbiacion from './ContactoUbicacion';

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
    minHeight: '60vh',
  },
};

export default Content;
