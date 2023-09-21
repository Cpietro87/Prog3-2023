/* Implementar un semáforo 
Crear un componente de luz de paso de peatones que cambia cuando se pulsa el Boton
Añade un alert al controlador de clics. Cuando la luz es verde y dice "Caminar", 
al hacer clic en el botón debe decir "Parar es lo siguiente". Cuando la luz es roja y dice "Parar", 
al hacer clic en el botón debe decir "Caminar es lo siguiente". */


import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Parar es lo siguiente' : 'Caminar es lo siguiente');
  }

  return (
    <>
      <button onClick={handleClick}>
        Cambia a {walk ? 'Parar' : 'Caminar'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Caminar' : 'Parar'}
      </h1>
    </>
  );
}