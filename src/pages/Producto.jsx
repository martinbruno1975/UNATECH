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
          <p style={styles.titulo}>{productoC.nombre}</p>
          <h3 style={styles.descripcion}>Descripción:</h3><p style={styles.p}>{productoC.descripcion}</p>
          <h3></h3><p style={styles.precio}>${productoC.precio}</p>
        </div>
      </div>

      <div style={styles.seccionContainer}>
        <div style={styles.seccion}>
          <h1 style={styles.tituloSeccion}>Componentes</h1>
          <div style={styles.grid}>
            {productoC.Componentes && productoC.Componentes.length > 0 ? (
              productoC.Componentes.map(componente => (
                <ComponenteCard key={componente.id} componente={componente} />
              ))
            ) : (
              <p style={styles.mensaje}>No hay componentes disponibles.</p>
            )}
          </div>
        </div>

        <div style={styles.seccion}>
          <h1 style={styles.tituloSeccion}>Fabricantes</h1>
          <div style={styles.grid}>
            {productoF.Fabricantes && productoF.Fabricantes.length > 0 ? (
              productoF.Fabricantes.map(fabricante => (
                <FabricanteCard id="card" key={fabricante.id} fabricante={fabricante} />
              ))
            ) : (
              <p style={styles.mensaje}>No hay fabricantes disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

const styles = {
  //CSS del producto
  producto: {
    display: "flex",
    flexWrap: 'wrap',
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    minHeight: "100vh",
    marginTop: "80px",
    width:"100vw"
  },
  datos: {
    display: "flex",
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    margin: "40px auto",
    boxShadow: "0px 2px 8px 2px rgba(255, 165, 0, 0.9)",
    backgroundColor: "white",
  },
  info: {
    flex: 1,
    marginRight: "20px",
    marginLeft: "20px",
  },
  titulo: {
    fontSize: "45px",
    margin: "20px 0 10px 0",
    color: "black",
    fontWeight: "bold",
  },
  descripcion: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.5",
  },
  imagen: {
    width: "auto",
    height: "60vh",
    borderRadius: "10px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    maxWidth: "100%"
  },
  p: {
    color: "#333",
    fontSize: "22px",
  },
  precio: {
    color: "orange",
    fontSize: "35px"
  },

  //CSS de componentes y fabricantes
  seccionContainer: {
    width:"100vw",
    maxWidth: "1235px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    marginTop: "80px",
  },
  seccion: {
    marginBottom: "40px",
    textAlign: "center",
    color: "black",
  },
  tituloSeccion: {
    fontSize: "35px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    padding: "20px",
    width: "100%"
  },
  mensaje: {
    fontSize: "18px",
    color: "black",
    marginTop: "10px",
  },
};


