import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomHook from '../Hook/CustomHook';

const LoginCompo = () => {
    // const [state, setState] = useState({ formData: "" })
    const { handleChange, inp, error } = CustomHook({ "role": "1" }, {})
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate();


    // const setData = (event) => {
    //     setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    // }
    const Login = (event) => {
        event.preventDefault();

        // fetch(`http://localhost:5000/user?email=${inp.uname}&password=${inp.upass}`)
        //     .then((res) => {
        //         console.log(res);
        //         return res.json()
        //     })
        //     .then((data) => {
        //         console.log(inp.uname);
        //         console.log(data);
        //         const users = data.find((user) => user.uname === inp.uname && user.upass === inp.upass);
        //         if (users) {
        //             navigate('/logout')
        //         } else {
        //             // alert('Invalid username or password')
        //             setMessage('Invalid username or password')
        //         }
        //     });

        fetch(`http://localhost:5000/users?email=${inp.uname}&password=${inp.pass}`)
            .then((res) => { return res.json() })
            .then((response) => {
                console.log(response.length);
                // console.log(response[0].role);
                if (response.length > 0) {
                    console.log(response[0].role);
                    setLoginError(false)
                    if (response[0].role == 1) {
                        navigate("/admindahsboard")
                    } else {

                        navigate("/")
                    }
                } else {
                    setLoginError(true)
                }
            })
    }



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
                                </div>
                                {loginError ? <p className='alert alert-danger '>Invalid user</p> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCompo;