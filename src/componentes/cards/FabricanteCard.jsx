import React from 'react';

export default function FabricanteCard({ fabricante }) {
  return (
    <div className="card">
      <img
        src={`/${fabricante.pathImgPerfil}`}
        alt={fabricante.nombre}
        className="card-image"
      />
      <h3>{fabricante.nombre}</h3>
      <p>{fabricante.direccion}</p>
      <p>{fabricante.numeroContacto}</p>
    </div>
  );
}
