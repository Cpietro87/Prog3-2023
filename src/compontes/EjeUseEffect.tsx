import { useEffect, useState } from "react";

export const EjeEffect = () => {
    const [suma, setSuma] = useState(0);

    useEffect(()=>{
        console.log(`Se renderizó el use Effect ${suma}`);
    },[suma]);

    return(
        <>
            <h2>Suma {suma}</h2>
            <button 
            // evento 
                className="btn btn-outline-primary mt-2"
                onClick={()=>setSuma(suma + 1) }>
                Sumar
            </button>
        </>
    )
};