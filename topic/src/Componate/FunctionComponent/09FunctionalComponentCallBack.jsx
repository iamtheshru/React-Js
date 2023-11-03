import { useCallback, useState } from "react";

const funcount = new Set();
const Functionalcomponentcallback = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    // const incrementCount = () => {
    //     setCount(count + 1);
    // };
    // const decrementCounter = () => {
    //     setCount(count - 1);
    // }
    // const incrementNumber = () => {
    //     setNumber(number + 1);
    // };

    const incrementCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);
    funcount.add(incrementCount);
    funcount.add(decrementCounter);
    funcount.add(incrementNumber);
    console.log(funcount);

    return (
        <>
            <p> Count:{count}</p>
            <p>Number:{number}</p>

            <button onClick={incrementCount}>IncrementCount</button>
            <button onClick={decrementCounter}>DecrementCount</button>
            <button onClick={incrementNumber}>IncrementNumber</button>
        </>
    );
}

export default Functionalcomponentcallback;