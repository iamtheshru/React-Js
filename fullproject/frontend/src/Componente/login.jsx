import React, { useState } from "react";
import { API_URL } from "../config";
import { Navigate, useNavigate } from "react-router-dom";
import ForgetPwd from "./ForgetPwd.jsx";
import { ToastContainer } from "react-toastify";
import CustomerHook from "./CustomeHook";

function Login() {
    const [show, setShow] = useState(true);
    const [inp1, setInp1] = useState({ email: "", password: "" });
    const [open, setOpen] = useState(false);
    const { handeldata2, inp2, error2, resetdata2 } = CustomerHook({ role: "2", username: "", password: "", email: "" });

    let navigate = useNavigate();

    const showedata = () => {
        setShow(!show);
    };

    const forgetPwd = () => {
        setOpen(true);
    };

    const isAuth = localStorage.getItem("token");
    if (isAuth) {
        return <Navigate to="/login/navbar" replace />;
    }

    const handeldata1 = (e) => {
        setInp1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const Submitdata1 = async (e) => {
        e.preventDefault();

        const inpdata1 = {
            email: inp1.email,
            password: inp1.password,
        };

        if (!inp1.email && !inp1.password) {
            console.log("This field is required");
        } else {
            const response = await fetch(`${API_URL}/api/v1/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(inpdata1),
            });

            if (response.ok) {
                const fetchdata = await response.json();
                const stordata = fetchdata.data.user;
                const token = fetchdata.data.accessToken;
                localStorage.setItem("stordata", JSON.stringify(stordata));
                localStorage.setItem("token", JSON.stringify(token));

                console.log("success", fetchdata);
                navigate("navbar");
            } else {
                const data = await response.json();
                console.log("error", data);
            }
        }
    };

    const Submitdata2 = async (e) => {
        e.preventDefault();

        const inpdata = {
            username: inp2.username,
            password: inp2.password,
            email: inp2.email,
        };

        if (!inp2.username && !inp2.password && !inp2.email) {
            console.log("This field is required");
        } else {
            const response = await fetch(`${API_URL}/api/v1/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(inpdata),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("success", data);
            } else {
                const data = await response.json();
                console.log("error", data);
            }
        }
        resetdata2();
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
                                onChange={handeldata1}
                                onBlur={handeldata1}
                                value={inp1.email}
                            />
                        </div>
                        <div className="m-2">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="border-solid border-slate-400 border-2 mx-2"
                                onChange={handeldata1}
                                onBlur={handeldata1}
                                value={inp1.password}
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
                        <div
                            className="mt-10 text-sm border-b border-gray-500 py-5 cursor-pointer"
                            onClick={forgetPwd}
                        >
                            Forget password?
                        </div>
                    </form>
                    <ForgetPwd open={open} setOpen={setOpen} />
                    <ToastContainer />
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
                            onChange={handeldata2}
                            onBlur={handeldata2}
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
                            onChange={handeldata2}
                            onBlur={handeldata2}
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
                            onChange={handeldata2}
                            onBlur={handeldata2}
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
                    </div>
                </form>
            )}
        </main>
    );
}

export default Login;
