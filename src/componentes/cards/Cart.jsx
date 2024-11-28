import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <div className='carrito'>
      <div className='cart-total'>
        <h2>Carrito</h2>
        <h5>Total: ${calculateTotal()}</h5>
      </div>
      
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.nombre} - {item.quantity} x ${item.precio} = ${item.precio * item.quantity}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Cart;
