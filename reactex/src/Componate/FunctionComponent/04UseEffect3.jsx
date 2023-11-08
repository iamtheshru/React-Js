import { useEffect } from "react";
import { useState } from "react";

const UseEffectEx3 = () => {
    const [input, setIput] = useState("");
    const [isValid, setValid] = useState(false);

    let inputHandler = (e) => {
        setIput(e.target.value)
    }
    useEffect(() => {
        if (input.length < 5 || /\d/.test(input)) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [input])

    return (
        <>
            <h3>Running on state change: validating input field</h3>
            <form action="">
                <label htmlFor="input">Write something (more than 5 non numerical characters is a valid input)</label><br />
                <input type="text" id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
            </form>
            <br />
            <p style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem', width: '20rem' } : { backgroundColor: 'lightpink', padding: '.5rem', width: '20rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</p>
        </>
    );
}

export default UseEffectEx3;
