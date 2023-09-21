import { useState } from "react"

export const ColorChange = () => {
    const [color, setColor] = useState('red');

    const handleClick = () => {
        setColor('blue');
    };

    return(
        <div>
            <h1 style={{color: color}}>cambiar color del titulo</h1>
            <button onClick={handleClick}>Cambiar Color</button>
        </div>
    )
}
