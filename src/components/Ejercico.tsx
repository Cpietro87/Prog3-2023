// deberás crear un componente de React con TypeScript llamado ColorChanger 
// que permita cambiar el color de una oración mediante un checkbox. 
// El texto del label del checkbox será proporcionado como una prop al componente.

import { useState } from "react";

const ColorChanger = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [color, setColor] = useState('white');

  const handleCheckBox = () =>{
    setIsChecked(!isChecked)
    setColor(isChecked ? 'white' : 'red')
  };

  const sentenceStyle = {
    color: color,
  }
  

  return(
    <div>
      <label>
        <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
         />
         Cambiar Color
      </label>
      <p style={sentenceStyle}>Esta oración va a cambiar de color</p>
    </div>
  );
}

export default ColorChanger