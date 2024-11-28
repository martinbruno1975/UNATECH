import React from 'react';
import ContactInfo from './ContactInfo';
import MapEmbed from './MapEmbed';
import './ContactoUbicacion.css';

export default function ContactoUbiacion() {
  return (
    <div id='contacto' className="container">
      <div className="contact-info">
        <ContactInfo />
      </div>
      <div className="map-embed">
        <MapEmbed />
      </div>
    </div>
  );
}
