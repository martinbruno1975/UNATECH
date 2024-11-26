import React from 'react';

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={styles.cart}>
      <div style={styles.total}>
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

const styles = {
  cart: { marginTop: '2em', padding: '1em', border: '1px solid #ccc' },
  total: {display: 'flex', 
    justifyContent: 'space-between',
    backgroundColor: '#FFA500',
    alignItems: 'center',
    alignContent: 'center'
  }
};

export default Cart;
