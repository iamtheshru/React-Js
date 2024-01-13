import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CustomHook from "../Hook/CustomHook";
import { fetchProducts } from '../Action/index.jsx';
import { useEffect, useState } from "react";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [message1, setMessage1] = useState('')

    const [loginError, setLoginError] = useState(false)
    const { handleChange, inp, error, resetForm } = CustomHook({ "role": "1", "name": "", "password": "" }, {})
    const sumbit = (e) => {
        e.preventDefault();

    }

    const saveData = () => {
        if (!inp.name || !inp.password) {
            setMessage("This field is required")
        } else {
            dispatch(fetchProducts(inp.name, inp.password, navigate));
            setMessage1("This User Name and Passsword is Wrong")
        }
        resetForm()

        console.log("called");
    }

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-body">
                                <form onSubmit={sumbit}>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" placeholder='Enter User Name' className='form-control' name="name" required onChange={handleChange} onBlur={handleChange} value={inp.name} />
                                            {error.nameError ? <span>This field is Required</span> : ""}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Password' type="password" name="password" required onChange={handleChange} onBlur={handleChange} value={inp.password} />
                                            {error.passwordError ? <span>This field is Required</span> : ""}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <input type="button" value="Login" className='btn btn-info' onClick={saveData} /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <Link to="/signup">Sign Up</Link>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            {!inp.name || !inp.password ? <> <p style={{ "color": "white", "background": "#ab2626" }}>{message1}</p></> : <>   <p style={{ "color": "white", "background": "#ab2626" }}>{message}</p></>}

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Login;