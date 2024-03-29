import { useState } from "react";
import CustomeHook1 from './CustomeHook1.jsx'
import CustomeHook from './CustomeHook.jsx'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [state, setState] = useState(true);
    const { handleChange, inp, error, resetForm } = CustomeHook({ "role": "1", "name1": "", "password1": "" }, {})
    const { handleChange1, inp1, error1, resetForm1 } = CustomeHook1({ "role": "2", "name": "", "password": "" }, {})

    const navigate = useNavigate();
    const Data = () => {
        setState(!state)
        resetForm()
        resetForm1()
    }
    const Submit = (e) => {
        e.preventDefault()
    }
    const Submit1 = (e) => {
        e.preventDefault()
    }
    const savedata = () => {
        if (!inp.name1 || !inp.password1) {
            // setMessage1("This field is required")
            console.log("error");
        } else {
            fetch(` http://localhost:4000/user?name=${inp.name1}&password=${inp.password1}`)
                .then((res) => { return res.json() })
                .then((response) => {
                    // console.log(response.length);
                    if (response.length > 0) {
                        console.log(response[0]);

                        // setCookie('loggedin', "active");

                        if (response[0].role === "1") {
                            // setCookie('admin', "true");
                            navigate("/admin")
                            console.log("admin");
                        } else {
                            // navigate("/buydata")
                            // resetForm1()
                            console.log("all Data");
                        }
                    } else {
                        // setLoginError(true)
                        console.log("not right data");
                    }
                    resetForm()
                })
        }
    }

    const savedata1 = () => {
        if (!inp1.name || !inp1.password) {
            console.log("This field is required");
        } else {
            fetch('http://localhost:4000/user', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // sent request
                    "Accept": "application/json",   // expected data sent back
                },
                body: JSON.stringify(inp1),
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    resetForm1()

                })
            Data(false)
        }
    }

    return (<>
        <div className="mt-5">
            {state ? <>
                <form onSubmit={Submit}>
                    <div className="col-70">
                        <label htmlFor="">
                            <p>Name</p>
                            <input type="text" name="name1" placeholder="name" value={inp.name1} onChange={handleChange} onBlur={handleChange} />
                            {error.name1Error ? <span>This field is Required</span> : ""}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <p>Password</p>
                            <input type="password" name="password1" placeholder="password" value={inp.password1} onChange={handleChange} onBlur={handleChange} />
                            {error.password1Error ? <span>This field is Required</span> : ""}
                        </label>
                    </div>
                    <button onClick={savedata}>Sign In</button>
                    <button onClick={Data}>Click</button>
                </form>
            </> :
                <>
                    <form onSubmit={Submit1}>
                        <div className="col-70">
                            <label htmlFor="">
                                <p>Name1</p>
                                <input type="text" name="name" placeholder="Name" onChange={handleChange1} onBlur={handleChange1} value={inp1.name} />
                                {error1.nameError ? <span>This field is Required</span> : ""}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <p>Password1</p>
                                <input type="password" name="password" placeholder="password" onChange={handleChange1} onBlur={handleChange1} value={inp1.password} />
                                {error1.passwordError ? <span>This field is Required</span> : ""}
                            </label>
                        </div>
                        <button onClick={Data}>Click</button>
                        <button onClick={savedata1}>Register</button>
                    </form>
                </>
            }
        </div>
    </>);
}

export default Login;