import { useEffect, useMemo, useState } from "react";
// import axios from 'axios'

const Functionalcomponentmeno = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);
    const [text, setText] = useState("sachin");

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/comments")
    //         .then((response) => setData(response.data))
    //         .then((result) => console.log(result))
    // }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = "";

        for (let i = 0; i < comments.length; i++) {
            let currents = comments[i].name;
            if (currents.length > longestName.length) {
                longestName = currents;
            }
        }
        console.log("THIS WAS COMPUTED");
        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [toggle]);

    const UseMemo = useMemo(() => {
        console.log("multiCount");
        return count * 2;
    }, [count])
    return (
        <>
            <p>UseMemo</p>
            <p>{UseMemo}</p>
            <p>{item}</p>
            <p>{text}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <button onClick={() => setItem(item + 5)}>Click</button>
            <button onClick={() => setText("Virat")}>Update Text</button>


            <div className="App">
                <div> {getLongestName} </div>

                <button onClick={() => { setToggle(!toggle) }}>
                    {" "}Toggle
                </button>
                {toggle && <h1> toggle </h1>}
            </div>
        </>
    );
}

export default Functionalcomponentmeno;
