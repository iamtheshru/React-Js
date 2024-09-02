import { useState } from "react";

const CustomeHook = (ini, err) => {
    const [inp2, setInp2] = useState(ini);
    const [error2, setError2] = useState(err);

    const handeldata2 = (e) => {
        setInp2((inp2) => ({ ...inp2, [e.target.name]: e.target.value }));

        if (e.target.value === "") {
            setError2({ ...error2, [[e.target.name + "Error"]]: "This file is required" })
        } else {
            setError2({ ...error2, [[e.target.name + "Error"]]: "" })
        }
    }

    const resetdata2 = () => {
        setInp2(ini);
        setError2(err);
    }
    return { handeldata2, inp2, error2, resetdata2 };
}

export default CustomeHook;

