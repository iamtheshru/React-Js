import React, { useState } from "react";
import { API_URL } from "../config";
import { Navigate, useNavigate } from "react-router-dom";
import ForgetPwd from "./ForgetPwd.jsx";
// import { ToastContainer } from "react-toastify";
import CustomerHook from "./CustomeHook";

function Login() {
    const [show, setShow] = useState(true);
    const [inp1, setInp1] = useState({ email: "", password: "" });
    const [open, setOpen] = useState(false);
    const { handalchange2, inp2, error2, handalreset2 } = CustomerHook({ role: "2", username: "", password: "", email: "" });

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
        return <Navigate to="/login/navbar" replace />;
    }

    const showedata = () => {
        setShow(!show);
    };

    const handalchange1 = (e) => {
        setInp1((prevent) => ({ ...prevent, [e.target.name]: e.target.value }))
    }

    const Submitdata1 = async (e) => {
        e.preventDefault();

        const fromdata = {
            email: inp1.email,
            password: inp1.password,
        }


        // Validate input fields
        if (!inp1.password || !inp1.email) {
            console.log("All fields are required");
            return; // Stop execution if any field is empty
        }

        try {
            const responce = await fetch(`${API_URL}/api/v1/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fromdata)
            });

            if (responce.ok) {
                const logindata = await responce.json();
                // console.log(logindata);
                const tokendata = logindata.data.user;
                localStorage.setItem("token", JSON.stringify(tokendata));
                setTimeout(() => {
                    navigate("/login/navbar")
                }, 1000)
            } else {
                const errorData = await responce.json()
                console.log(errorData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const Submitdata2 = async (e) => {
        e.preventDefault();

        const inpdata = {
            username: inp2.username,
            password: inp2.password,
            email: inp2.email,
        };

        // Validate input fields
        if (!inp2.username || !inp2.password || !inp2.email) {
            console.log("All fields are required");
            return; // Stop execution if any field is empty
        }

        try {
            const response = await fetch(`${API_URL}/api/v1/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(inpdata),
            });

            // Check if response is successful
            if (response.ok) {
                const data = await response.json();
                console.log("Success:", data);
            } else {
                const errorData = await response.json();
                console.log("Error:", errorData);
            }
        } catch (error) {
            console.error("Network error:", error);
        }

        handalreset2(); // Clear form after submission
    };
    const forgetPwd = () => {
        setOpen(true);
        console.log("hello");

    };

    return (
        <main className="flex flex-col justify-center items-center p-24">
            {show ? (
                <>
                    <form className="shadow bg-slate-100 p-10" onSubmit={Submitdata1}>
                        <h2 className="text-center">Login Page</h2>
                        <div className="m-2">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="border-solid border-slate-400 border-2 mx-2"
                                value={inp1.email}
                                onChange={handalchange1}
                                onBlur={handalchange1}
                            />
                        </div>
                        <div className="m-2">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="border-solid border-slate-400 border-2 mx-2"
                                value={inp1.password}
                                onChange={handalchange1}
                                onBlur={handalchange1}
                            />
                        </div>
                        <div className="m-2 text-center">
                            <button type="submit" className="bg-blue-500 px-2 py-1 rounded ml-5 mr-1">
                                Login
                            </button>
                            <button onClick={showedata} className="bg-red-500 px-2 py-1 rounded">
                                Register
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <form className="shadow bg-slate-100 p-10" onSubmit={Submitdata2}>
                    <h2 className="text-center">Register Page</h2>
                    <div className="m-2">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            required
                            className="border-solid border-slate-400 border-2 mx-2"
                            onChange={handalchange2}
                            onBlur={handalchange2}
                            value={inp2.username}
                        />
                    </div>
                    <div className="m-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="border-solid border-slate-400 border-2 mx-2"
                            onChange={handalchange2}
                            onBlur={handalchange2}
                            value={inp2.password}
                        />
                    </div>
                    <div className="m-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="border-solid border-slate-400 border-2 ml-9"
                            onChange={handalchange2}
                            onBlur={handalchange2}
                            value={inp2.email}
                        />
                    </div>
                    <div className="m-2 text-center">
                        <button type="submit" className="bg-blue-500 px-2 py-1 rounded ml-5 mr-1">
                            Register
                        </button>
                        <button onClick={showedata} className="bg-red-500 px-2 py-1 rounded">
                            Login
                        </button>
                        <div
                            class="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip cursor-pointer"
                            onClick={forgetPwd}
                        >
                            Forget password ?
                        </div>
                    </div>
                </form>
            )}

            <ForgetPwd open={open} setOpen={setOpen} />
        </main>
    );
}

export default Login;

