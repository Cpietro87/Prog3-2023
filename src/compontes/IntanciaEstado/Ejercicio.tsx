/* Fijar un contador de peticiones 
Estás trabajando en una aplicación de comercialización de arte que permite al 
usuario enviar varios pedidos de un artículo de arte al mismo tiempo. 
Cada vez que el usuario pulsa el botón «Buy», el contador de «Pending» debería aumentar en uno. 
Después de tres segundos, el contador de «Pending» debería disminuir y el de «Completed» debería aumentar. */


import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() { 
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
    <h1 style={{color: 'darkred'}}>Ejercicio</h1>
      <h3>
        Pendiente: {pending}
      </h3>
      <h3>
        Completado: {completed}
      </h3>
      <button onClick={handleClick}>
        Comprar
      </button>
    </>
  );
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}