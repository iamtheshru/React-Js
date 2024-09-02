import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [emailId, setEmailId] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("token");
        if (login) {
            navigate('/about')
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailId == "abc@gmail.com" && pass == "123") {
            localStorage.setItem("token", true);
            navigate("/about");

        } else {
            setEmailId('');
            setPass('');
            alert("please provide correct email id and password")
        }
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <h2>Login Page</h2>
            <div>
                <input type="email" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </>);
}

export default Login;