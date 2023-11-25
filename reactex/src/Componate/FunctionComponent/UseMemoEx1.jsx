import { useMemo } from "react";
import { useState } from "react";

const UseMemoEx1 = () => {
    const [number, setNumber] = useState(0);

    // Using useMemo
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number])


    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    const [counter, setCounter] = useState(0);
    // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    }


    return (
        <>
            <div className="row">
                <div className="col-6">
                    <input type="number" placeholder="Enter a number" value={number} onChange={onChangeHandler} />
                    <div>OUTPUT: {squaredNum}</div>
                    <button onClick={counterHander}>Counter ++</button>
                    <div>Counter : {counter}</div>

                    {/* <h2>Usememo</h2>
                <h2>{count}</h2>
                <h2>{item}</h2>
                <h2>{text}</h2>
                <h2>{Usememo}</h2>
                <button onClick={() => setCount(count + 1)}>Update Count</button>
                <button onClick={() => setItem(item + 5)}>Update Item</button>
                <button onClick={() => setText("Virat")}>Update Text</button> */}
                </div>
            </div>

        </>
    );
    function squareNum(number) {
        console.log("Squaring will be done!");
        return Math.pow(number, 2);
    }
}

export default UseMemoEx1;