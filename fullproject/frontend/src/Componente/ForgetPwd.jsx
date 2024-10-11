// function ForgetPwd() {
//     return (<>
//         <form >
//             <label>Email</label>
//         </form>
//     </>);
// }

// export default ForgetPwd;


import React, { useState } from 'react';
import { API_URL } from '../config';

const ForgetPwd = ({ open, setOpen }) => {
    const [forgetEmail, setForgetEmail] = useState({ email: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForgetEmail((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = {
            email: forgetEmail?.email
        };

        try {
            const response = await fetch(`${API_URL}/api/v1/users/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                setMessage("Password reset link has been sent to your email.");
            } else {
                setMessage("Error: Unable to send password reset link.");
            }
        } catch (error) {
            setMessage("Error: Unable to connect to the server.");
        }
    };

    return (
        <>
            {open && (
                <div id="modal" className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl mb-4">Forgot Password</h2>
                        <form id="forgotPasswordForm" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={forgetEmail?.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit</button>
                        </form>
                        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                        <button id="closeModalButton" className="mt-4 text-gray-500" onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ForgetPwd;
