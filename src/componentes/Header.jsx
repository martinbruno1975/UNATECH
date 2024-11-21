import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <li><NavLink to="/">Inicio</NavLink></li>
          <li 
            className="dropdown" 
            onMouseEnter={abrirSubMenu} 
            onMouseLeave={cerrarSubMenu} 
          >
            <NavLink>Sobre Nosotros</NavLink>
            <ul className={`dropdown-menu ${subMenuAbierto ? 'show' : ''}`}>
              <li><NavLink >Servicios</NavLink></li>
              <li><NavLink >Galería</NavLink></li>
              <li><NavLink >Contacto/Ubicacion</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/productos">Productos</NavLink></li>
          <li><NavLink to="/FabricantesComponentes">Fabricantes/Componentes</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;