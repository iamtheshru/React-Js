import { useState } from "react";
import CustomCard from './04propChilds.jsx';


const FunctionalComponentState = () => {
    let [Data, setData] = useState("Default");
    let [count, setCount] = useState(0);
    const [info, setInfo] = useState(false);
    let [box, setBox] = useState(false);
    let varible = "data";

    const changeData = () => {
        console.log("called");
        varible = "Test";
        setData(count % 2 === 0 ? "odd" : "even")
        setCount(count - 1)
        setInfo((current) => !current);
    }
    const card = () => {
        setBox((show) => !show);
    }
    return (
        <>
            <p>Simple Varible:{varible}</p>
            <p>State Data:{Data}</p>
            <p>State Count:{count}</p>
            <p>{info ? "New value" : "Old value"}</p>
            <button className='btn btn-primary' onClick={() => {
                setCount(count + 1); setData(count % 2 === 0 ? "odd" : "even")
            }}>Change </button >&nbsp;

            < button className='btn btn-primary' onClick={changeData} > Change State</button >&nbsp;
            <button className='btn btn-primary' onClick={card}>click</button>
            <div className="row">
                <div className="col">
                    {box ? <>
                        <div className="col-3">
                            <div className="col"><CustomCard kaipan="Something" image="/ReactPublic2.jpg" /> </div>
                        </div>
                    </> : ""
                    }
                </div>
            </div>
        </>

    );
}

export default FunctionalComponentState;


