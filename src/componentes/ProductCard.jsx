// src/ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div style={styles.card}>
      <img src={"/"+product.pathImg} alt={product.pathImg} style={styles.image} />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p><strong>Precio:</strong> ${product.precio}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        style={styles.quantityInput}
      />
      <button onClick={handleAddToCart} style={styles.button}>Agregar al carrito</button>
    </div>
  );
};

const styles = {
  card: { border: '1px solid #ccc', padding: '1em', width: '200px', textAlign: 'center' },
  image: { width: '100%', height: 'auto' },
  quantityInput: { width: '50px', margin: '0.5em 0' },
  button: { padding: '0.5em', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' },
};

export default ProductCard;
