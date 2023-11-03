import React, { useReducer } from 'react'

const initialCount = 0;

const display = (state, action) => {
    if (action.type === "INCREASE") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    if (action.type === "MULTI") {
        return state * 2
    }
    if (action.type === "CLEAR") {
        return state * 0
    }
}
const Functionalcomponentreducer = () => {
    const [state, dispatch] = useReducer(display, initialCount);

    return (
        <>
            <h3>Functional Component Reducer</h3>
            <p>{state}</p>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "INCREASE" })}>Increase Count </button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement Count </button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "MULTI" })}>Multiply by two </button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "CLEAR" })}>Clear count </button>
        </>
    );
}

export default Functionalcomponentreducer;