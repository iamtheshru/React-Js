import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const [userById, setuserById] = useState({ name: "" });
    const [loader, setLoader] = useState(false);
    let { userid } = useParams();
    let navigator = useNavigate();

    const fetchData = () => {
        axios.get(`http://localhost:5000/user/${userid}`)
            .then(function (response) {
                console.log(response.data);
                setuserById(response.data)
                setLoader(true)
            })
    }
    const updatedata = () => {
        fetch(`http://localhost:5000/user/${userid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",  // sent request
                "Accept": "application/json",   // expected data sent back
            },
            body: JSON.stringify(userById)
        })
            .then((res) => { console.log(res); return res.json() })
            .then((response) => {
                console.log(response);
                navigator('/admin/allusers')
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <div className="row box">
            <div className="col-8">
                {loader ? <form>
                    {/* {JSON.stringify(inp)} */}
                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder='Enter User Name' className='form-control' value={userById.name} onChange={(e) => { setuserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="name" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <input className='form-control' placeholder='Enter your Password' type="password" value={userById.pass} onChange={(e) => { setuserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="pass" required />
                        </div>
                        {JSON.stringify(userById)}
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <input type="button" value="Udpate" onClick={updatedata} className='btn btn-info' /> &nbsp;
                            <input type="reset" className='btn btn-warning' />
                        </div>

                    </div>
                </form> : "no data found"}
            </div>
        </div>
    </>);
}

export default EditUser;