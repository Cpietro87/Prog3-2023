import { useState } from 'react';

export default function InstanceTime() {
  const [number, setNumber] = useState(0);

const handleButton = () => {
  setNumber(number + 5);
  alert(number);
}

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleButton}>+5</button>
    </>
  )
}
