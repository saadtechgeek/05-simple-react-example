import React, { useReducer } from 'react';
import counterReducer from "./CounterReducer";
const Child2 = () => {
    let [state,dispatch] =useReducer(counterReducer,1);
    console.log(state);
    return(
        <div>
            <h3>Using Counter reducer. Value of reducer state is: {state}</h3>
<button onClick={()=>dispatch('INCREMENT')}>Increament Reducer</button>
        </div>
    )
}

export default Child2;