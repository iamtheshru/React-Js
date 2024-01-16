import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alluserProducts } from '../Action/index.jsx';
import { Link } from "react-router-dom";


const Admin = () => {
    const dispatch = useDispatch()
    // let [allUsers, setAllUsers] = useState({})
    // let [loader, setLoader] = useState(false)
    const allUsers = useSelector((state) => state.products.user)
    useEffect(() => {
        dispatch(alluserProducts())
        // console.log(updateProducts());
    }, [])
    return (<>
        <div className="row box">
            <div className="col">
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers && allUsers.map(data => (
                            <tr key={data.id} style={{ textAlign: "center" }}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td><Link to={`/edituser/${data.id}`}>Edit</Link> &nbsp;&nbsp;&nbsp;
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>  <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        No users found
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}

export default Admin;