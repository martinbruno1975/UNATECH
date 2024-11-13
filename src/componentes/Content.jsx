// src/Content.js
import React from 'react';
import AboutUs from './AboutUs';
//import NavigationMenu from './componentes/NavigationMenu';
import ImageGallery from './ImageGallery';
import VideoEmbed from './VideoEmbed';
import Description from './Description';
import ContactInfo from './ContactInfo';
import MapEmbed from './MapEmbed';

const Content = () => (
  <main style={styles.main}>
    <AboutUs />
    <Description />
    <ImageGallery />
    <VideoEmbed videoId="tuVideoIdAqui" />
    <ContactInfo />
    <MapEmbed />
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
