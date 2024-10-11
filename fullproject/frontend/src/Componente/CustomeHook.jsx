import { useState } from "react";

// Define your custom hook
const CustomeHook = (ini, err) => {
    const [inp2, setInp2] = useState(ini);
    const [error2, setError2] = useState(err);

    const handalchange2 = (e) => {
        setInp2((inp2) => ({ ...inp2, [e.target.name]: e.target.value }));

        if (e.target.value === "") {
            setError2({ ...error2, [e.target.name + "Error"]: "This field is required" });
        } else {
            setError2({ ...error2, [e.target.name + "Error"]: "" });
        }
    };

    const handalreset2 = () => {
        setInp2(ini);
        setError2(err);
    };

    return { handalchange2, inp2, error2, handalreset2 };

};

// Export the custom hook as the default export
export default CustomeHook;
