import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className='card'>
      <img src={"/" + product.pathImg} alt={product.pathImg} />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p><strong>Precio:</strong> ${product.precio}</p>
      <div>
        <input className='inputCantidad'
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        />
        <button id='botonAgregar' onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
      <Link to={'/productos/' + product.id}>Ver más</Link>
    </div>
  );
};

export default ProductCard;
