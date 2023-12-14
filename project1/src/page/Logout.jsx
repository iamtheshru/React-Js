import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    // const [logout, setLogout] = useState("");
    const navigate = useNavigate();

    const setdata = () => {
        // setLogout(() => {
        // })
        navigate('/')
    }
    return (<>
        <button onClick={setdata} className="btn-danger d-block mx-auto px-5 py-2 m-5">Logout</button>
    </>);
}

export default Logout;