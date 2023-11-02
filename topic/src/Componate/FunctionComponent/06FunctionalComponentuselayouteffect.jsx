import { useState } from "react";
import { useEffect, useLayoutEffect } from "react";

const FunctionalCompoUselayouteffect = () => {
    const [count, changeState1] = useState(0);
    const [text, changeState2] = useState("");
    const [data, changeState3] = useState(true);

    useEffect(() => {
        console.log("useEffect");
    }, [count]);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        // fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => console.log(response))
    }, [])

    // useLayoutEffect(() => {
    //     console.log("useLayoutEffect");
    //     if (data) {
    //         changeState2("true useLayoutEffect")
    //     } else {
    //         changeState2("flase useLayoutEffect")
    //     }
    // }, [text]);


    return (
        <div className="row">
            <div className="col-6">
                <h3>{count}</h3>
                <h3>{text}</h3>
                <h3>{data}</h3>
                <button onClick={() => changeState1(count + 1)}>Count</button>
            </div>
        </div>
    );
}

export default FunctionalCompoUselayouteffect;