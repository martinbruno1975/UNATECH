import React from 'react'
import './ComponenteCard.css'

export default function ComponenteCard({ componente }) {
  return (
    <div className='container-componente'>
      <div className='container-banda'></div>
      <div className='container-info'>
        <h5>{componente.nombre}</h5>
        <p>{componente.descripcion}</p>
      </div>    
    </div>
  );
}