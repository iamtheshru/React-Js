import { useLayoutEffect, useState } from "react";

const UseLayoutEffectEx1 = () => {
    // When you click the page*, the state changes immediately (value resets to 0), 
    // which re-renders the component, and then the effect runs – which sets the value to some random number, 
    // and re-renders again.

    const [value, setValue] = useState(0);
    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value])
    console.log('render', value);
    return (
        <>
            <h3>UseLayoutEffect Ex1</h3>
            <span>{value}</span>
            <button onClick={() => setValue(0)}>Click</button>
        </>
    );
}

export default UseLayoutEffectEx1;