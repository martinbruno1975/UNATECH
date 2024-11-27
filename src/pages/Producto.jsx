import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ComponenteCard from '../componentes/ComponenteCard';
import FabricanteCard from '../componentes/FabricanteCard';

export default function Producto() {
  const { id } = useParams()
  const [productoC, setProductoC] = useState({ Componentes: [] });
  const [productoF, setProductoF] = useState({ Fabricantes: [] });

  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}/componentes`)
      .then(response => response.json())
      .then(data => setProductoC(data))
      .catch(error => console.error('Error fetching producto:', error));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}/fabricantes`)
      .then(response => response.json())
      .then(data => setProductoF(data))
      .catch(error => console.error('Error fetching producto:', error));
  }, [id]);

  return (
    <div style={styles.producto}>
      <div style={styles.datos}>
        <img style={styles.imagen} src={"/" + productoC.pathImg} alt={productoC.pathImg} />
        <div style={styles.info}>
          <h3 style={styles.titulo}>Nombre:</h3><p style={styles.p}>{productoC.nombre}</p>
          <h3 style={styles.descripcion}>Descripción:</h3><p style={styles.p}>{productoC.descripcion}</p>
          <h3>Precio:</h3><p style={styles.p}>{productoC.precio}</p>
        </div>
      </div>

      <div>
        <div>
          <h1>Componentes</h1>
          {productoC.Componentes && productoC.Componentes.length > 0 ? (
            productoC.Componentes.map(componente => (
              <ComponenteCard key={componente.id} componente={componente} />
            ))
          ) : (
            <p>No hay componentes disponibles.</p>
          )}
        </div>

        <div>
          <h1>Fabricantes</h1>
          {productoF.Fabricantes && productoF.Fabricantes.length > 0 ? (
            productoF.Fabricantes.map(fabricante => (
              <FabricanteCard key={fabricante.id} fabricante={fabricante} />
            ))
          ) : (
            <p>No hay fabricantes disponibles.</p>
          )}
        </div>
      </div>
    </div>

  )
}

const styles = {
  datos: {
    display: "flex",
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "80vw",
    margin: "120px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "orange",
  },
  info: {
    flex: 1,
    marginRight: "20px",
    marginLeft: "20px",
  },
  titulo: {
    fontSize: "2vw",
    margin: "20px 0 10px 0",
    color: "black",
  },
  descripcion: {
    fontSize: "16px",
    color: "black",
    lineHeight: "1.5",
  },
  imagen: {
    width: "auto",
    height: "60vh",
    borderRadius: "10px",
    objectFit: "cover",
  },
  p: {
    color:"#333"
  }
};