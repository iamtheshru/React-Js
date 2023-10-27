import React, { useEffect, useState } from 'react';

const FunctionalComponentUseEffect = () => {
    const [state, changeState] = useState(false);
    const [state2, changeState2] = useState(false);

    // useEffect(() => {
    //     console.log("called");
    //     fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log("error"));
    // })
    useEffect(() => {
        // console.log("called");
        fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => console.log(response))
    }, [state2])

    // const change = () => {
    //     changeState2((state) => !state)
    // }
    useEffect(() => {
        // console.log("called");
        fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
        return (() => {
            console.log("called unmont");
        })
    }, [state2])
    return (
        <>
            <p>render</p>
            <button onClick={() => { changeState(!state) }}>Click</button>
            <button onClick={() => { changeState2(!state) }}>Click</button>

            {/* <button onClick={() => { changeState(!state) }}>Click</button>
            <button onClick={() => { changeState2(!state) }}>Click</button> */}
        </>
    );
}

export default FunctionalComponentUseEffect;