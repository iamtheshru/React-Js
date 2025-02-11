import { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate("/")
        // setIsLoggedOut(true)
    }
    return (<>
        <h1>About</h1>
        <button onClick={handlelogout}>Logout</button>
    </>);
}

export default About;