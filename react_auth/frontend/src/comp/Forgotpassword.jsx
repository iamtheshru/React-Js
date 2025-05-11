import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/forgot-password", { email })
            const forgetdata = await res.data;
            if (res.status === 200) {
                localStorage.setItem('forget-token', forgetdata.token)
                navigate("/reset-password")
                setEmail("");
            } else {
                alert('mail id not match')
            }
        } catch (error) {
            alert('mail id not match')
            localStorage.removeItem("forget-token")
            console.log(error);
            setEmail("");
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-blue-500">
                <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                        <p className="text-gray-600 mb-4">Enter your email address to reset your password.</p>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border-b-2 border-blue-400 focus:outline-none mb-4"
                        />
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Send Reset Link</button>
                    </form>
                </div>
            </div>
            {/* <div className="text-center mt-4">
                <p className="text-sm text-gray-600">Remembered your password?
                    <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
            </div> */}
        </>
    )
}

export default Forgotpassword
