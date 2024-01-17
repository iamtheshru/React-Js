import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alluserProducts, deleteProducts } from '../Action/index.jsx';
import { Link, useParams } from "react-router-dom";


const Admin = () => {
    const dispatch = useDispatch()
    // let [allUsers, setAllUsers] = useState({})
    let [loader, setLoader] = useState(false)
    const allUsers = useSelector((state) => state.products.user)
    let { id } = useParams();
    useEffect(() => {
        dispatch(alluserProducts())
        setLoader(true);
    }, [allUsers]);

    const deleteHandal = (id) => {
        dispatch(deleteProducts(id))
            .then(() => {
                console.log('Delete operation successful.');
                dispatch(alluserProducts());
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    }
    return (<>
        <div className="row box">
            <div className="col">
                {loader ? <table className='table table-striped table-hover'>
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
                                    <button onClick={() => deleteHandal(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        No users found
                    </tbody>
                </table>
                }
            </div>
        </div>
    </>
    );
}

export default Admin;