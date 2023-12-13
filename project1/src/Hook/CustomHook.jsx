import React from 'react';
import { useState } from 'react';

const CustomHook = (initValue, iniError) => {
    const [inp, setInp] = useState(initValue)
    const [error, setError] = useState(iniError);

    const handleChange = (e) => {
        setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        if (e.target.value == "") {
            let SpanId = [e.target.name] + "Error";
            setError({ ...error, [SpanId]: "This field is required" })
        } else {
            console.log("inside else condition");
            setError({ ...error, [[e.target.name + "Error"]]: "" })
        }
    }
    return { handleChange, inp, error };
};

export default CustomHook;
