import React from 'react';
import Menu from './Menu';

const Header = () => {
  return (
    <header style={styles.header}>
      <img src="https://picsum.photos/80" alt="Logo de Mi Aplicación" style={styles.logo} />
      <Menu />
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  logo: {
    height: '80px',
    width: 'auto',
  },
};

export default Header;
