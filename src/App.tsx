import {EjeReducer} from "./compontes/EjeReducer";
import { EjeEffect } from "./compontes/EjeUseEffect";
import { Counter } from "./compontes/EjeUseState";
import ColorChanger from "./compontes/Ejercico";
import { ColorChange } from "./compontes/HandleEvent";
import { EjeProps } from "./compontes/Props";
import CheckBox from "./compontes/widgets/CheckBox";
import RadioButton from "./compontes/widgets/RadioButton";




function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>

      {/* <h2>useState</h2>
      <hr/>
      <Counter/>
      <h2>useEffect</h2>
      <hr/>
      <EjeEffect/>
      <h2>useReducer</h2>
      <hr/>
      <EjeReducer/>
      <h2>Check Box</h2>
      <hr/>
      <CheckBox label="Mujer"/>
      <CheckBox label="Varon"/>
      <h2>Radio Button</h2>
      <hr/>
      <RadioButton options={options}/> */}
    <h2>Props</h2>
    <hr/>
    <EjeProps title="Prog3" subTitle={124}/>
    <h2>Manejar evento</h2>
    <hr/>
    <ColorChange/>
    <ColorChanger/>
    </>
  );
}

export default App;
