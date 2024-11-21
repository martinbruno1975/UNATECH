import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => (
  <section id="contact" className="contact-section">
    <h2 className="contact-title">Contacto</h2>
    <div className="contact-item">
      <p className="contact-text"><span className="contact-label">Dirección:</span> Calle Falsa 123, Ciudad, País</p>
    </div>
    <div className="contact-item">
      <p className="contact-text"><span className="contact-label">Teléfono:</span> +123 456 7890</p>
    </div>
    <div className="contact-item">
      <p className="contact-text"><span className="contact-label">Correo electrónico:</span> TpCIU@unahur.com.ar</p>
    </div>
    <div className="contact-item">
      <p className="contact-text"><span className="contact-label">Horario de apertura:</span> Lunes a Viernes, 9:00 - 18:00</p>
    </div>
  </section>
);

export default ContactInfo;
