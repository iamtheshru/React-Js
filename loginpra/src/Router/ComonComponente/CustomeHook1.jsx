import { useState } from "react";

const CustomeHook1 = (ini, inerror) => {
    const [inp1, setInp1] = useState(ini);
    const [error1, setError1] = useState(inerror);
    const handleChange1 = (e) => {
        setInp1((inp1) => ({ ...inp1, [e.target.name]: e.target.value }));
        if (e.target.value == "") {
            setError1({ ...error1, [[e.target.name + "Error"]]: "This field is required" })
        } else {
            setError1({ ...error1, [[e.target.name + "Error"]]: "" })
            console.log("inside else condition");
        }
    }
    const resetForm1 = () => {
        setInp1(ini)
    }
    return { handleChange1, inp1, error1, resetForm1 }
}

export default CustomeHook1;