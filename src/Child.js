import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = (props) => {
    let counterValue= useContext(counterContext);
    console.log(counterValue);
    return (
        <div>
            <h2>Counter context. This is first child Name {props.name}</h2>
            <h2>Counter Value is {counterValue[0]}</h2>
            <button 
            onClick={()=> counterValue[1](++counterValue[0])}>
            Increament Context
            </button>
        </div>
    );
}

export default Child;