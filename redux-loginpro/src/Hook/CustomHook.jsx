import { useState } from "react"

const CustomHook = (initValue, iniError) => {
    const [inp, setInp] = useState(initValue);
    const [error, setError] = useState(iniError)


    const handleChange = (e) => {
        setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        if (e.target.value == "") {
            let setInp = [e.target.name] + "Error";
            setError({ ...error, [setInp]: "This field is Required" })
        } else {
            console.log("inside else condition");
            setError({ ...error, [[e.target.name + "Error"]]: "" })
        }
    }
    const resetForm = () => {
        setInp(initValue);
    }
    return { handleChange, inp, error, resetForm }
}
export default (CustomHook);