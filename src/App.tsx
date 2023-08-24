import Gallery from "./compontes/EjeImagen";
import {EjeReducer} from "./compontes/EjeReducer";
import { EjeEffect } from "./compontes/EjeUseEffect";
import { Counter } from "./compontes/EjeUseState";
import ColorChanger from "./compontes/Ejercico";
import { ColorChange } from "./compontes/HandleEvent";
import { EjeProps } from "./compontes/Props";
import UserComponent from "./compontes/RendCondicional";
import Toolbar from "./compontes/alert";
import Estatua from "./compontes/object";
import CheckBox from "./compontes/widgets/CheckBox";
import RadioButton from "./compontes/widgets/RadioButton";
import AutoComponent from "./compontes/widgets/Tp/tp2";
import  Chat  from "./compontes/Chat";
import Contador from "./compontes/InstanciaEstado";




function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];


  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>
      <h2>Manejar evento</h2>
      <hr/>
      <UserComponent/>
      <hr/>
      <Gallery/>
      <hr/>
      <Contador/>
    </>
    
  );
}

export default App;
