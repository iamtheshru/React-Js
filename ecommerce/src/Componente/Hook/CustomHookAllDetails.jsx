import { useState } from "react";


const CustomHookAllDetails = (initValue, iniError) => {
    const [inp, setInp] = useState(initValue);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInp((inp) => ({ ...inp, [name]: value }))
    }
    return { handleInputChange, inp, setInp };
}

export default CustomHookAllDetails;