// src/Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={styles.cart}>
      <h2>Carrito</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.nombre} - {item.quantity} x ${item.precio} = ${item.precio * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

const styles = {
  cart: { marginTop: '2em', padding: '1em', border: '1px solid #ccc' },
};

export default Cart;
