import React, { useEffect, useState } from "react";
import './../Componente/assets/login.css';
import CustomHook from './../Componente/Hook/CustomHook.jsx';
import CustomHook1 from './../Componente/Hook/CustomHook2.jsx';

const Loing = () => {
    const [state, setState] = useState(true)
    const data = () => {
        setState(!state)
    }
    const { handleChange1, inp1, error1 } = CustomHook({ "role": "1" }, {})
    const { handleChange2, inp2, error2 } = CustomHook1({ "role": "2" }, {})

    const [message, setMessage] = useState('');

    const Login = (event) => {
        event.preventDefault();
        // fetch(`http://localhost:4000/user?name=${inp.name}&password=${inp.password}`)
        //     .then((res) => { return res.json() })
        //     .then((response) => {
        //         console.log(response.length);
        //         if (response.length > 0) {
        //             console.log(response[0].role);

        //         } else {

        //         }
        //     })
    }
    const savedata = (e) => {
        if (!inp2.name || !inp2.password || !inp2.email) {
            setMessage("This field is required")
        } else {
            fetch(' http://localhost:4000/user', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // sent request
                    "Accept": "application/json",   // expected data sent back
                },
                body: JSON.stringify(inp2),
            }).then((res) => {
                console.log(res);
                return res.json();
            }).then((responce) => {
                console.log(responce);
                // inp2.name("");

            })
            // inp2.name("");
        }
    }


    return (<>
        <section className="mt">
            <div class="cont">
                {/* {JSON.stringify(inp1)} */}
                {state ? <>
                    <form >
                        <div class="form sign-in col-70">
                            <h2 className="lgn-text">Welcome</h2>
                            <label className="fnt">
                                <span>Email</span>
                                <input type="email" className="lng-input" name="name1" />

                            </label>
                            <label className="fnt">
                                <span>Password</span>
                                <input type="password" className="lng-input" name="password1" />
                            </label>
                            <p class="forgot-pass">Forgot password?</p>
                            <button type="button" class="submit lg-btn" >Sign In</button>
                        </div>
                        <div class="sub-cont col-30">
                            <div class="img">
                                <div class="img__text m--up">

                                    <h3>Don't have an account? Please Sign up!</h3>
                                </div>
                                <button onClick={data} className="d-block mx-auto lg-btn">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </> : <>
                    <form onSubmit={Login}>
                        <div class="form sign-up col-70">
                            <h2 className="lgn-text">Create your Account</h2>
                            <label className="fnt">
                                <span>Name</span>
                                <input type="text" className="lng-input" value={inp2.name} name="name" onChange={handleChange2} onBlur={handleChange2} />
                                {error2.nameError ? <span>This field is Required</span> : ""}
                            </label>
                            <label className="fnt">
                                <span>Email</span>
                                <input type="email" className="lng-input" value={inp2.email} name="email" onChange={handleChange2} onBlur={handleChange2} />
                            </label>
                            <label className="fnt">
                                <span>Password</span>
                                <input type="password" className="lng-input" value={inp2.password} name="password" onChange={handleChange2} onBlur={handleChange2} />
                            </label>
                            <button type="button" class="submit lg-btn" onClick={savedata}>Register</button>
                            {/* <p>{message}</p> */}
                        </div>
                        <div class="sub-cont col-30">
                            <div class="img">
                                <div class="img__text m--in">

                                    <h3>If you already has an account, just sign in.</h3>
                                </div>
                                <button onClick={data} className="d-block mx-auto lg-btn">Sign In</button>
                            </div>
                        </div>
                    </form>
                </>}
            </div>
        </section >
    </>);
}

export default Loing;