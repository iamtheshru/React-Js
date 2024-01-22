import { useState } from "react";

const CustomHook1 = (initValue, iniError) => {
    const [inp1, setInp1] = useState(initValue);
    const [error1, setError1] = useState(iniError);

    const handleChange1 = (e) => {
        setInp1((inp1) => ({ ...inp1, [e.target.name]: e.target.value }))
        if (e.target.value == "") {
            let SpanId1 = [e.target.name] + 'Error';
            setError1({ ...error1, [SpanId1]: "This field is required" })
        } else {
            console.log("inside else condition");
            setError1({ ...error1, [[e.target.name + "Error"]]: "" })
        }
    }
    const resetForm1 = () => {
        setInp1(initValue)
    }
    return { handleChange1, inp1, error1,resetForm1 };
}


export default (CustomHook1);