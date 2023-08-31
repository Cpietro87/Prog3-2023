import { useState } from "react";

export default function InstanceCounter() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <h1>Poner en cola un estado</h1>
        <h2>{number}</h2>
        <button onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </>
    )
  }