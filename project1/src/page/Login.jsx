import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginCompo = () => {
    const [state, setState] = useState({ formData: "" })
    const setData = (event) => {
        setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-header text-center">Login</div>
                            <div className="card-body">

                                <form>
                                    <div className="row">
                                        <div className="col">
                                            {/* <label>Username </label> */}
                                            {/* <input type="text" placeholder='Enter User Name' className='form-control' onChange={(event)=>{
                                                setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}}))
                                            }} name="uname" required /> */}
                                            <input type="text" placeholder='Enter User Name' className='form-control' onChange={setData} name="uname" required />

                                            {/* {JSON.stringify(state)} */}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">

                                            {/* <label>Password </label> */}
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={setData} name="pass" required />
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">

                                            <input type="submit" className='btn btn-info' /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>

                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col text-center my-2">
                                        <Link to="/signup">Click here to create new account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCompo;