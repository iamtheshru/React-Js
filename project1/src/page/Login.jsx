import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomHook from '../Hook/CustomHook';

const LoginCompo = () => {
    // const [state, setState] = useState({ formData: "" })
    const { handleChange, inp, error } = CustomHook({ "role": "1" }, {})
    const navigate = useNavigate();


    // const setData = (event) => {
    //     setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    // }
    const Login = (event) => {
        event.preventDefault();

        // if (validate()) {
        fetch(`http://localhost:5000/user?email=${inp.uname}&password=${inp.upass}`)
            .then((res) => {
                console.log(res);
                return res.json()
            })
            .then((data) => {

                console.log(data);
                if (inp.name) {
                    navigate('/')
                }
                else if (inp.uname === data) {
                    alert('aa')
                }
            });
    }

    // }
    // const validate = () => {
    //     let result = true;
    //     if (inp.uname == "") {
    //         result = false;
    //         console.log("data is required");
    //     }
    //     if (inp.upass === "") {
    //         result = false
    //         console.log("data is required");
    //     }
    //     return result
    // }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-header text-center">Login</div>
                            <div className="card-body">

                                <form onSubmit={Login}>
                                    {JSON.stringify(inp)}
                                    <div className="row">
                                        <div className="col">
                                            {/* <label>Username </label> */}
                                            {/* <input type="text" placeholder='Enter User Name' className='form-control' onChange={(event)=>{
                                                setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}}))
                                            }} name="uname" required /> */}
                                            <input type="text" placeholder='Enter User Name' className='form-control' onChange={handleChange} onBlur={handleChange} name="uname" required />
                                            {error.unameError ? <span>This field is Required</span> : ""}

                                            {/* {JSON.stringify(state)} */}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">

                                            {/* <label>Password </label> */}
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={handleChange} onBlur={handleChange} name="upass" required />
                                            {error.upassError ? <span>This field is Required</span> : ""}

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
                                    {/* <button onClick={validate}>aa</button> */}
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