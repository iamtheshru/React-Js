import { useCallback, useState } from "react";
import ChildUseMemo from './10ChildUseMemo.jsx'

const Functionalcomponentcallback = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(1);

    const add = useCallback(() => {
        var a = 10, b = 20, c;
        c = a + b;
        console.log("Additaion of two number", c);
    }, [count])
    const data = (() => {
        console.log("item");
    });
    return (
        <>
            <div className="row">
                <div className="col">
                    <h3>{count}</h3>
                    <h3>{item}</h3>
                    <h3>{data()}</h3>  {/*multiple callback  and without dependency*/}
                    <ChildUseMemo add={add} />
                    <button onClick={() => setCount(count + 1)}>Count</button>
                    <button onClick={() => setItem(item * 2)}>Update Item</button>
                </div>
            </div>
        </>

    );
}

export default Functionalcomponentcallback;