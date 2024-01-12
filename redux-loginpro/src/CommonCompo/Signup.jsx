
import { useDispatch } from 'react-redux';
import CustomHook from './../Hook/CustomHook.jsx';
import { postProducts } from '../Action/index.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { handleChange, inp, error } = CustomHook({ "role": "2" }, {})

    const sumbit = (e) => {
        e.preventDefault();

    }
    const savedata = () => {
        if (!inp.name || !inp.password || !inp.email) {
            setMessage("This field is required")
        } else {
            dispatch(postProducts(inp));
            navigate('/login');
        }
    }
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 mt-5">
                    <div className="card">
                        <div className="card-header text-center">Signup</div>
                        <div className="card-body">
                            <form onSubmit={sumbit}>
                                {/* {JSON.stringify(inp)} */}
                                <div className="row">
                                    <div className="col">
                                        <input type="text" placeholder='Enter User Name' className='form-control' name="name" value={inp.name} required onChange={handleChange} onBlur={handleChange} />
                                        {error.nameError ? <span>This field is Required</span> : <></>}
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input className='form-control' placeholder='Enter your Password' type="password" name="password" value={inp.password} required onChange={handleChange} onBlur={handleChange} />
                                        {error.passwordError ? <span>This field is Required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input className='form-control' placeholder='Enter your Email' type="email" name="email" value={inp.email} required onChange={handleChange} onBlur={handleChange} />
                                        {error.emailError ? <span>This field is Required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <input type="button" value="register" className='btn btn-info' onClick={savedata} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <p style={{ "color": "white", "background": "#ab2626" }}>{message}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Signup;