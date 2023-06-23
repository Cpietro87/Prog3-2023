
export const EjeProps = ({title, subTitle }: {title: string, subTitle: number}) =>{
    if(!title){
        throw new Error('No se recibio un titulo')
    }
    return(
        <>
            <h1>{title}</h1>
            <p>{subTitle }</p>
        </>
    )
};



  