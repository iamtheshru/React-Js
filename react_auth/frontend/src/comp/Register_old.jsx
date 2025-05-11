import React from 'react';
import CustomHook from './Customehook.jsx';
import axios from 'axios';

const Register = () => {
    const { handledata, inp, error, setInp, resetdata } = CustomHook();

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/register', inp);
            console.log("Server response:", res.data);
            resetdata();
        } catch (err) {
            console.log("Error:", err);
        }
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input
                    className="border text-black"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={inp.name}
                    onChange={handledata}
                    onBlur={handledata}
                />
                {error.nameError && <span style={{ color: "red" }}>{error.nameError}</span>}

                <input
                    className="border text-black"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={inp.email}
                    onChange={handledata}
                    onBlur={handledata}

                />
                {error.emailError && <span style={{ color: "red" }}>{error.emailError}</span>}

                <input
                    className="border text-black"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={inp.password}
                    onChange={handledata}
                    onBlur={handledata}

                />
                {error.passwordError && <span style={{ color: "red" }}>{error.passwordError}</span>}

                <input
                    className="border text-black"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Register;
