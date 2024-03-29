import { useState } from "react";

const CustomeHook1 = (ini, inerror) => {
    const [inp, setInp] = useState(ini);
    const [error, setError] = useState(inerror);
    const handleChange = (e) => {
        setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }));
        if (e.target.value == "") {
            setError({ ...error, [[e.target.name + "Error"]]: "This field is required" })
        } else {
            setError({ ...error, [[e.target.name + "Error"]]: "" })
            console.log("inside else condition");
        }
    }
    const resetForm = () => {
        setInp(ini)
    }
    return { handleChange, inp, error, resetForm }
}

export default CustomeHook1;