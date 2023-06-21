import React,{ useReducer } from "react";

//Definicion de los tipos

interface State {
    count: number;
};

type Action = {type: 'SUMAR' } | {type: 'RESTAR'};
//Definición Reeducer
const reducer = (state: State, action: Action): State => {

    switch (action.type) {
        case 'SUMAR':
            return {count: state.count + 1};
        case 'RESTAR':
            return { count: state.count - 1}; 
        default:
            return state;
    };

};

export const EjeReducer: React.FC = () => {
    //Estado inicial
    const initialState: State = {count: 0};
    //usamos reducer
    const [state, dispach] = useReducer(reducer, initialState);
    
    return(
        <div>
            <p>Contar: {state.count}</p>
            <button
                className="btn btn-outline-primary mt-2" 
                onClick={()=> dispach({type: 'SUMAR'})}>+</button>
            <button 
                className="btn btn-outline-primary mt-2"
                onClick={()=> dispach({type: 'RESTAR'})}>-</button>

        </div>
    );
};




