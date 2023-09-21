/* Al hacer clic en este botón se supone que debe cambiar el fondo de la página entre blanco y negro. 
Sin embargo, nada pasa cuando lo cliqueas. Soluciona el problema. 
(No te preocupes por la lógica dentro de handleClick: esa parte está bien). */

 export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }
  
    return (
      <button onClick={handleClick}>
        Alterna las luces
      </button>
    );
  } 
  