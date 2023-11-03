import { useMemo, useState } from "react";

const Functionalcomponentmeno = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);
    const [text, setText] = useState("sachin");
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
        </>
    );
}

export default Functionalcomponentmeno;