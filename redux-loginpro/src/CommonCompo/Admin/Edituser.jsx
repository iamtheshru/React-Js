import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from '../../Action/index';
import { useNavigate, useParams } from "react-router-dom";


const Edituser = () => {
    const dispatch = useDispatch()
    let [UserById, setUserById] = useState({ name: "", email: "" })

    let { id } = useParams();
    const navigate = useNavigate();


    const updatedata = () => {
        dispatch(updateProducts(id, UserById)); // Pass user id and updated data
        navigate("/admin")
    };


    return (<>
        <div className="row box">
            <div className="col-lg-4 offset-lg-4 mt-5">
                <div className="card">
                    <div className="card-header">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" placeholder='Enter User Name' className='form-control' value={UserById.name} onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="name" required />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input className='form-control' placeholder='Enter your Password' type="email" value={UserById.email} onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="email" required />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="button" value="Udpate" onClick={updatedata} className='btn btn-info' /> &nbsp;
                                        <input type="reset" className='btn btn-warning' />
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

export default Edituser;