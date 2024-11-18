import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import FabricantesComponentes from './pages/FabricantesComponentes'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Producto from './pages/Producto';


const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/FabricantesComponentes" element={<FabricantesComponentes />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
