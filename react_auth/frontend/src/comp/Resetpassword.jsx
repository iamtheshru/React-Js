import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resetpassword = () => {
    const [pass, setPass] = useState({ password: '', conpassword: '' });
    const getdat = localStorage.getItem("forget-token");

    const navigate = useNavigate();
    const handlechange = (e) => {
        const { name, value } = e.target;
        setPass(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (pass.password === pass.conpassword) {
            const tokendata = {
                token: getdat,
                newPassword: pass.password,
            };

            try {
                const res = await axios.post('http://localhost:5000/reset-password', tokendata);
                console.log(res);
                alert("Password reset successfully!");
                setPass({ password: "", conpassword: "" });
                navigate('/login')
            } catch (error) {
                console.error(error);
                alert("Something went wrong.");
            }
        } else {
            alert("Confirm password is not the same");
            setPass({ password: "", conpassword: "" });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
                    <p className="text-gray-600 mb-4">Enter your new password.</p>
                    <input
                        type="password"
                        placeholder="New Password"
                        name="password"
                        value={pass.password}
                        onChange={handlechange}
                        className="w-full p-2 border-b-2 border-blue-400 focus:outline-none mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="conpassword"
                        value={pass.conpassword}
                        onChange={handlechange}
                        className="w-full p-2 border-b-2 border-blue-400 focus:outline-none mb-4"
                    />
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Resetpassword;
