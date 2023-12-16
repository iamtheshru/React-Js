import React, { useState } from 'react';
import CustomHook from './../Hook/CustomHook';
import { useNavigate } from 'react-router-dom';

const RegistrationCompo = () => {
    // const [state, setState] = useState({ formData: "" })
    const { handleChange, inp, error } = CustomHook({ "role": "2" }, {})
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    let savedata = (e) => {
        if (!inp.name || !inp.password || !inp.email) {
            setMessage("This field is required")
        } else {
            fetch("http://localhost:5000/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // sent request
                    "Accept": "application/json",   // expected data sent back
                },
                body: JSON.stringify(inp)
            }).then((res) => {
                console.log(res);
                return res.json()
            })
                .then((response) => {

                    navigate("/login")
                    console.log(response);
                })
        }
    }


    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-header text-center">Signup</div>
                            <div className="card-body">

                                <form onSubmit={submit}>
                                    {JSON.stringify(inp)}
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" placeholder='Enter User Name' className='form-control' onChange={handleChange} onBlur={handleChange} name="name" required />
                                            {error.nameError ? <span>This field is Required</span> : <></>}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={handleChange} onBlur={handleChange} name="password" required />
                                            {error.passwordError ? <span>This field is Required</span> : <></>}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Email' type="email" onChange={handleChange} onBlur={handleChange} name="email" required />
                                            {error.email ? <span>This field is Required</span> : <></>}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">

                                            <input type="button" value="register" onClick={savedata} className='btn btn-info' /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>

                                    </div>
                                    <p>{message}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default RegistrationCompo;