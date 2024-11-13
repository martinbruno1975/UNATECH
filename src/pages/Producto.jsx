import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>{product.nombre}</h2>
        <img src={product.pathImg} alt={product.nombre} style={styles.image} />
        <p>{product.descripcion}</p>
        <p><strong>Precio:</strong> ${product.precio}</p>
        <button onClick={onClose} style={styles.button}>Cerrar</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' },
  modal: { backgroundColor: '#fff', padding: '2em', margin: '10% auto', width: '300px', textAlign: 'center' },
  image: { width: '100%', height: 'auto' },
  button: { marginTop: '1em', padding: '0.5em 1em', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' },
};

export default ProductDetails;
