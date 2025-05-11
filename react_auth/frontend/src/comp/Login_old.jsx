import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [form, setForm] = useState({ name: "", password: "", email: "" });
    const [error, setError] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!form.password.trim()) newErrors.password = "Password is required";
        return newErrors;
    };

    console.log(error);

    const handalechange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (e.target.value == "") {
            setError((prev) => ({ ...prev, [e.target.name]: "this file is required" })); // clear error on input

        } else {

            setError((prev) => ({ ...prev, [e.target.name]: "" })); // clear error on input
        }
    };

    const handalesubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/login', form);
            localStorage.setItem('token', res.data.token);
            console.log("Login successful", res.data);
            setForm({ name: "", password: "", email: "" });
        } catch (error) {
            console.log("Error during login", error);
        }
    };

    return (
        <div>
            <form method='post' onSubmit={handalesubmit}>
                <input
                    className="border"
                    type="text"
                    name='name'
                    value={form.name}
                    onChange={handalechange}
                    onBlur={handalechange}
                    placeholder="Name"
                />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}

                <input
                    className="border"
                    type="email"
                    name='email'
                    value={form.email}
                    onChange={handalechange}
                    onBlur={handalechange}
                    placeholder="Email"
                />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}

                <input
                    className="border"
                    type="password"
                    name='password'
                    value={form.password}
                    onChange={handalechange}
                    onBlur={handalechange}
                    placeholder="Password"
                />
                {error.password && <p style={{ color: "red" }}>{error.password}</p>}

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;
