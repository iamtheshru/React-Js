import { useState } from "react";

const UseSateEx1 = () => {
    const [click, setClick] = useState(0);
    return (
        <>
            <p>you are clicked {click} times!</p>
            <p>The number of times you have clicked is {click % 2 === 0 ? "even" : "odd"}</p>
            <button onClick={() => setClick(click => click + 1)}>Click Me</button>
        </>
    );
}

export default UseSateEx1;