import { useState } from "react";


const FunctionalComponentState = () => {
    let [Data, setData] = useState("Default");
    let [count, setCount] = useState(0);
    let varible = "data";

    const changeData = () => {
        console.log("called");
        varible = "Test";
        setData(count % 2 === 0 ? "odd" : "even")
        setCount(count - 1)
    }
    return (
        <>
            <p>Simple Varible:{varible}</p>
            <p>State Data:{Data}</p>
            <p>State Count:{count}</p>
            <button className='btn btn-primary' onClick={() => {
                setCount(count + 1); setData(count % 2 === 0 ? "odd" : "even")
            }}>Change </button >&nbsp;

            < button className='btn btn-primary' onClick={changeData} > Change State</button >


        </>
    );
}

export default FunctionalComponentState;