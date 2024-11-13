import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import FabricantesComponentes from './pages/FabricantesComponentes'
import Header from './componentes/Header';
import Footer from './componentes/Footer';


const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/FabricantesComponentes" element={<FabricantesComponentes />} />
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
