import { useCallback, useState } from "react";
import Child from "./Child.jsx";

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

    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Yo, pls sub to the channel!');
    const returnComment = useCallback(
        (name) => {
            return name + data
        }, [data]
    );
    return (
        <>
            <p> Count:{count}</p>
            <p>Number:{number}</p>

            <button onClick={incrementCount}>IncrementCount</button>
            <button onClick={decrementCounter}>DecrementCount</button>
            <button onClick={incrementNumber}>IncrementNumber</button>

            <Child returnComment={returnComment} />
            <button onClick={() => { setToggle(!toggle) }}>{" "} Toggle</button>
            {toggle && <h1>toggle</h1>}
        </>
    );
}

export default Functionalcomponentcallback;