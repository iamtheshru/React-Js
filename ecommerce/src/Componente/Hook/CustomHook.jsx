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
    return { handleChange1, inp1, error1 };
}
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
            // setInp2('')
        }
    }
    return { handleChange2, inp2, error2 };
}

export default (CustomHook1, CustomHook2);