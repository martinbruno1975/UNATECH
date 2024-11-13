import React, { useState, useEffect } from 'react';
import ProductCard from '../componentes/ProductCard';
import Cart from '../componentes/Cart';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div style={styles.page}>
      <h1>Productos</h1>
      <div style={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

const styles = {
  page: { padding: '2em' },
  productList: { display: 'flex', flexWrap: 'wrap', gap: '1em' },
};

export default ProductsPage;
