import React, { useState, useEffect } from 'react'
import FabricanteCard from '../componentes/FabricanteCard';
import ComponenteCard from '../componentes/ComponenteCard';

export default function FabricantesComponentes() {
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fabricantes')
      .then(response => response.json())
      .then(data => setFabricantes(data))
      .catch(error => console.error('Error fetching fabricantes:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/componentes')
      .then(response => response.json())
      .then(data => setComponentes(data))
      .catch(error => console.error('Error fetching componentes:', error));
  }, []);

  return (
    <div>
      <div>
        <h1>Fabricantes</h1>
        <div>
          {fabricantes.map(fabricante => (
            <FabricanteCard key={fabricante.id} fabricante={fabricante} />
          ))}
        </div>
      </div>

      <div>
        <h1>Componentes</h1>
        <div>
          {componentes.map(componente => (
            <ComponenteCard key={componente.id} componente={componente} />
          ))}
        </div>
      </div>
    </div>
  )
}
