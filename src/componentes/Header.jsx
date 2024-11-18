import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [subMenuAbierto, setSubMenuAbierto] = useState(false);
  const desplegarMenu = () => {
    setEstaAbierto(!estaAbierto);
  };
  const abrirSubMenu = () => {
    setSubMenuAbierto(true);
  };
  const cerrarSubMenu = () => {
    setSubMenuAbierto(false);
  };

  return (
    <div className="menu-container">
      <div className="left">
        <div className="logo">
          <img src="/images/extras/logoUNAHUR.png" alt="Logo UNATech"/>
          <span className="company-name">UNATech</span>
        </div>
      </div>

      <div className={`right ${estaAbierto ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={desplegarMenu}>
          <span className="menu-icon">{estaAbierto ? 'X' : '☰'}</span>
        </div>
        <ul className={`menu-list ${estaAbierto ? 'show' : ''}`}>
          <li><a href="#">Inicio</a></li>
          <li 
            className="dropdown" 
            onMouseEnter={abrirSubMenu} // Abre el submenú al pasar el mouse
            onMouseLeave={cerrarSubMenu} // Cierra el submenú al sacar el mouse
          >
            <a href="#">Sobre Nosotros</a>
            <ul className={`dropdown-menu ${subMenuAbierto ? 'show' : ''}`}>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Galería</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Visitanos</a></li>
            </ul>
          </li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Fabricantes/Componentes</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;