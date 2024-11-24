import React from 'react';

export default function FabricanteCard({ fabricante }) {
  return (
    <div className="card" style={{marginTop: '80px'}}>
      <img
        src={`/${fabricante.pathImgPerfil}`}
        alt={fabricante.nombre}
        className="card-image"
      />
      <h3 className="card-title">{fabricante.nombre}</h3>
      <p className="card-text">{fabricante.direccion}</p>
      <p className="card-text">{fabricante.numeroContacto}</p>
    </div>
  );
}
