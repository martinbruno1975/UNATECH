import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ComponenteCard from '../componentes/cards/ComponenteCard';
import FabricanteCard from '../componentes/cards/FabricanteCard';
import './Producto.css'

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
    <div className='producto'>
      <div className='datos'>
        <img src={"/" + productoC.pathImg} alt={productoC.pathImg} />
        <div >
          <p id='titulo'>{productoC.nombre}</p>
          <h3 id='descrip'>Descripción:</h3><p id='p'>{productoC.descripcion}</p>
          <h3></h3><p id='precio'>${productoC.precio}</p>
        </div>
      </div>

      <div className='seccion-container'>
        <div className='seccion'>
          <h1 >Componentes</h1>
          <div className='grid'>
            {productoC.Componentes && productoC.Componentes.length > 0 ? (
              productoC.Componentes.map(componente => (
                <ComponenteCard key={componente.id} componente={componente} />
              ))
            ) : (
              <p className='msj'>No hay componentes disponibles.</p>
            )}
          </div>
        </div>

        <div className='seccion'>
          <h1>Fabricantes</h1>
          <div className='grid'>
            {productoF.Fabricantes && productoF.Fabricantes.length > 0 ? (
              productoF.Fabricantes.map(fabricante => (
                <FabricanteCard id="card" key={fabricante.id} fabricante={fabricante} />
              ))
            ) : (
              <p className='msj'>No hay fabricantes disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}
