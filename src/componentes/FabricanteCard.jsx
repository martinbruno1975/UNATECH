import React from 'react';

export default function FabricanteCard({ fabricante }) {
  return (
    <div className="card" style={styles.card}>
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

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    border: "1px solid #ddd",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    minWidth: "200px",
    maxWidth: "100%",
    textAlign: "center",
  },
};