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
    <div>
      <h1>Detalle del producto {id}</h1>
      <div>
        <img src="" alt="" />
       <h2>{productoC.nombre}</h2>
       <h2>{productoC.descripcion}</h2>
       
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