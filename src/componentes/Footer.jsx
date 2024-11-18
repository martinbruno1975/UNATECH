import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <h5>UNAHUR</h5>
    <p>Aymara Dileo | Martín Bruno | Leonel Audino | Alan Amaya</p>
    <p>&copy; 2024 UNATECH. Todos los derechos reservados.</p>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1em',
  },
};

export default Footer;
