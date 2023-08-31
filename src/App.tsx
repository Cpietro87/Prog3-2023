import Gallery from "./compontes/EjeImagen";
import { EjeReducer } from "./compontes/EjeReducer";
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
import Chat from "./compontes/Chat";
import Contador from "./compontes/IntanciaEstado/InstanciaEstado";
import ToolBar from "./compontes/Repaso/IntanciaStado";
import IntanceState from "./compontes/IntanciaEstado/InstanciaEstado";
import InstanceCounter from "./compontes/IntanciaEstado/InstanceCounter";
import InstanceTime from "./compontes/IntanciaEstado/InstanceTime";
import Form from "./compontes/IntanciaEstado/stateInstance";




function App() {

  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <IntanceState />
      <hr />
      <InstanceTime />
      <hr />
      <InstanceCounter />
      <hr />
      <Form />
     
    </>
  );
}

export default App;
