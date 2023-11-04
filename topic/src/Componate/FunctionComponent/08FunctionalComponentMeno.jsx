import { useState, useMemo } from "react";

const Functionalcomponentmemo = () => {
    const [counter, kuchbhi] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["hey", "this", "is", "cool"];
    const word = words[wordIndex];
    const computeletterCount = (word) => {
        let i = 0;
        while (i < 100000) i++;
        console.log("computeletterCount", i);
        return word.length
    }
    const increment = () => kuchbhi(counter + 1);
    const letterCount = computeletterCount(word)


    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = useMemo(() => factorialOf(number), [number]);
    const onChange = event => {
        setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(i => i + 1);
    function factorialOf(n) {
        console.log('factorialOf(n) called!');
        return n <= 0 ? 1 : n * factorialOf(n - 1);
    }
    return (
        <>
            <p>UseMemo</p>
            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
            <p>words = ["hey", "this", "is", "cool"];</p>
            <p>Words Array Element of {wordIndex} index: {word}</p>
            <p>"{word}" has {letterCount} letters</p>

            {/* <p>State for word count: {wordIndex}</p> */}
            <p>{computeletterCount(wordIndex)}</p>
            <button onClick={() => {
                if (wordIndex + 1 == word.length) {
                    setWordIndex(0);
                } else {
                    setWordIndex(wordIndex + 1);

                }
            }
            }>Click Next Word Count</button >
            <button className='btn btn-primary' onClick={increment}>+</button>
            &nbsp; <label htmlFor="">{counter}</label>&nbsp;
            <button className='btn btn-danger' onClick={() => { kuchbhi(counter - 1) }}>-</button>
            <br /><br />
            <div>
                Factorial of
                <input type="number" value={number} onChange={onChange} />
                is {factorial}
                <button onClick={onClick}>Re-render</button>
            </div>
        </>
    );
}

export default Functionalcomponentmemo;