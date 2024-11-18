import React from 'react'

export default function FabricanteCard({fabricante}) {

  return (
    <div style={styles.card}>
      <img src={"/"+fabricante.pathImgPerfil} alt={fabricante.pathImgPerfil} style={styles.image} />
      <h3>{fabricante.nombre}</h3>
      <p>{fabricante.direccion}</p>
      <p>{fabricante.numeroContacto}</p>
    </div>
  )
}

const styles = {
  card: { border: '1px solid #ccc', padding: '1em', width: '200px', textAlign: 'center' },
  image: { width: '100%', height: 'auto' },
  quantityInput: { width: '50px', margin: '0.5em 0' },
  button: { padding: '0.5em', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' },
};
