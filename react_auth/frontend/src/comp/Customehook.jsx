import { useState } from "react";

const CustomHook = (initialValues = { name: "", email: "", password: "" }) => {
    const [inp, setInp] = useState(initialValues);
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        passwordError: ""
    });

    const handledata = (e) => {
        const { name, value } = e.target;
        setInp((prev) => ({ ...prev, [name]: value }));

        if (value.trim() === "") {
            setError((prev) => ({ ...prev, [name + "Error"]: "This field is required" }));
        } else {
            setError((prev) => ({ ...prev, [name + "Error"]: "" }));
        }
    };

    const resetdata = () => {
        setInp(initialValues);
        setError({
            nameError: "",
            emailError: "",
            passwordError: ""
        });
    };

    return { handledata, inp, error, setInp, resetdata };
};

export default CustomHook;
