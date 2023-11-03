import React, { useEffect, useState } from 'react';

const FunctionalComponentUseEffect = () => {
    const [state, changeState] = useState(false);
    const [state2, changeState2] = useState(false);

    // useEffect(() => {
    //     console.log("called");
    //     fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log("error"));
    // }, [])
    useEffect(() => {
        // console.log("called");
        fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((response) => console.log(response))
    }, [state2])

    const change = () => {
        changeState2((state) => !state)
    }
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
            <button onClick={() => { changeState2(!state2) }}>Click</button>

            {/* <button onClick={() => { changeState(!state) }}>Click</button>
            <button onClick={() => { changeState2(!state) }}>Click</button> */}

            <br />
           // Similar to componentDidMount and componentDidUpdate: <br />
            useEffect(() =&gt; &#123; <br />
            &nbsp;&nbsp;&nbsp; // Update the document title using the browser API <br />
            &nbsp;&nbsp;&nbsp; document.title = `You clicked $&#123;count&#125; times`; <br />
            &#125;); <br />

            <p>Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you're used to calling these operations "side effects" (or just "effects"), you've likely performed them in your components before.</p>

            <div className="alert alert-info">
                <b>Tip</b>
                <p>If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>

                <p>There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do. Let’s look at this distinction in more detail.</p>
            </div>
            <h2>Effects Without Cleanup</h2>
            useEffect(() =&gt; &#123; <br />
            document.title = `You clicked $&#123;count&#125; times`; <br />
            &#125;); <br />

            <h2>Effects with Cleanup</h2>


            useEffect(() =&gt; &#123; <br />
            function handleStatusChange(status) &#123; <br />
            setIsOnline(status.isOnline); <br />
            &#125; <br />
            ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange); <br />
                    // Specify how to clean up after this effect: <br />
            <b>return</b> function cleanup() &#123; <br />
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange); <br />
            &125#;; <br />
            &125#;); <br />
        </>
    );
}

export default FunctionalComponentUseEffect;