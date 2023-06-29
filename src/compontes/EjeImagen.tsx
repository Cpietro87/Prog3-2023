import { useState } from "react";
import { sculptureList } from "./data";

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string
}

export default function Gallery(){
  const [index, setIndex] = useState<number>(0);
  const [showMore, setShowmore] = useState<boolean>(false);
  const hasNext: boolean = index < sculptureList.length - 1;

  function handelNextClick(){
    if(hasNext){
      setIndex(index + 1);

    }else{
      setIndex(0);
    }
  }

  function handleMoreClick(){
    setShowmore(!showMore);
  }
   
  let sculpture: Sculpture = sculptureList[index]

  return(
    <>

      <button onClick={handelNextClick}>Siguiente</button>
      <h2>
        <i>{sculpture.name}</i>
        de {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Esconder' : 'Mostrar'} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt}/>
    </>
  )

} 