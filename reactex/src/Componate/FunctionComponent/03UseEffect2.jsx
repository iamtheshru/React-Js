import { useEffect } from "react";
import { useState } from "react";

const UseEffectEx2 = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count])
    return (
        <>
            <span>Count:{count}</span> &nbsp;
            <button onClick={() => setCount((c) => c + 1)}>+</button>&nbsp;
            <span>Calculation:{calculation}</span>
        </>
    );
}

export default UseEffectEx2;