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

const reducer = (state1, action) => {
    switch (action.type) {
        case "INCREASE":

            return { count: state1.count + 1 };
        case "DECREMENT":

            return { count: state1.count - 1 };
        case "toggleShowText":

            return { count: state1.count, showText: !state1.showText };
        default:
            return state1;
    }
}
const Functionalcomponentreducer = () => {
    const [state, dispatch] = useReducer(display, initialCount);
    const [state1, dispatch1] = useReducer(reducer, { count: 0 });

    return (
        <>
            <h3>Functional Component Reducer</h3>
            <p>{state}</p>
            <p>{state1.count}</p>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "INCREASE" })}>Increase Count </button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement Count </button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "MULTI" })}>Multiply by two </button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "CLEAR" })}>Clear count </button>
            <button onClick={() => dispatch1({ type: "INCREASE" })}>Click</button>
            <button onClick={() => dispatch1({ type: "DECREMENT" })}>Click</button>
            <button onClick={() => dispatch1({ type: "toggleShowText" })}>ToggleShowText</button>
            {state1.showText && <p>This is a text</p>}
            <p>Each of its event handlers calls setTasks in order to update the state. As this component grows, so does the amount of state logic sprinkled throughout it. To reduce this complexity and keep all your logic in one easy-to-access place, you can move that state logic into a single function outside your component, called a "reducer".</p>
            <p>By convention, it is common to give it a string type that describes what happened, and pass any additional information in other fields. The type is specific to a component, so in this example either 'added' or 'added_task' would be fine. Choose a name that says what happened!</p>
        </>
    );
}

export default Functionalcomponentreducer;