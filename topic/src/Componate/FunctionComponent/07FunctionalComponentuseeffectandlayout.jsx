import { useEffect, useLayoutEffect, useState } from "react";

const Functionalcomponentuselayouteffect1 = () => {
    let [btn, btnCall] = useState(false);
    const [count, changeState1] = useState(0);
    const [text, changeText] = useState("");
    const [data, changData] = useState(true);

    useEffect(() => {
        console.log("useEffect");
    }, [count]);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        // fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => console.log(response))
    }, [])

    useEffect(() => {
        async function test() {
            await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((result) => console.log(result)).catch((error) => "error")
        }
        test()
    });
    // async function test() {
    //   let data=  await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((result) => console.log(result)).catch((error) => "error")
    // return data;
    // }
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
        fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
        return (() => {
            console.log("called");
            // fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); }) //not showing

        })
    }, [btn])

    //  useLayoutEffect( async () => {
    //     console.log("called useLayoutEffect");
    //Warning: useLayoutEffect must not return anything besides a function, which is used for clean-up.

    //It looks like you wrote useLayoutEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:


    //     await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
    //     return (()=>{
    //         console.log("called");
    //         // fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => { console.log(response); })
    //     })
    // },[])


    return (
        <>
            <h3>difference bten useEffect vs useLayoutEffect</h3>
            <button onClick={() => btnCall(!btn)}> Callback</button>

            <div className="row">
                <div className="col-6">
                    <h3>{count}</h3>
                    <h3>{text}</h3>
                    <h3>{data}</h3>
                    <button onClick={() => changeState1(count + 1)}>Count</button>
                </div>
            </div>
        </>
    );
}

export default Functionalcomponentuselayouteffect1;