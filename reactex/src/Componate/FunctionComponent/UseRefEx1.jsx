import { useEffect, useState, useRef } from "react";

const Stopwatch = () => {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current) return;
        // let id = 0;
        timerIdRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            console.log("tick");
        }, 1000);
    }

    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    }

    const resetHandler = () => {
        stopHandler()
        setCount(count => 0)
    }
    useEffect(() => {
        // cleanup function
        return () => {
            clearInterval(timerIdRef.current);
        };
    }, [])
    return (<>
        <h1>Stopwatch</h1>
        <p>Time:{count}s</p>
        <button onClick={timerIdRef.current == 0 ? startHandler : stopHandler}>{timerIdRef.current == 0 ? 'Start' : 'Stop'}</button>
        {/* <button onClick={stopHandler}>Stop</button> */}
        <button onClick={resetHandler}>Reset</button>
    </>);
}

export default Stopwatch;