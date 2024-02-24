import { useState } from "react";


const CustomHook2 = (initValue, iniError) => {
    const [inp2, setInp2] = useState(initValue);
    const [error2, setError2] = useState(iniError);

    const handleChange2 = (e) => {
        setInp2((inp2) => ({ ...inp2, [e.target.name]: e.target.value }))
        if (e.target.value == "") {
            let SpanId2 = [e.target.name] + 'Error';
            setError2({ ...error2, [SpanId2]: "This field is required" })
        } else {
            console.log("inside else condition");
            setError2({ ...error2, [[e.target.name + "Error"]]: "" })
        }
    }
    const resetForm2 = () => {
        setInp2(initValue);
    };
    return { handleChange2, inp2, setInp2, error2, resetForm2 };
}

export default (CustomHook2);