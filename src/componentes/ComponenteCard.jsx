import React from 'react'

export default function ComponenteCard({componente}) {
  return (
    <div>
        <h3>{componente.nombre}</h3>    
        <h3>{componente.descripcion}</h3>    
    </div>
    
  )
}

