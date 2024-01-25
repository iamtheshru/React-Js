import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AdminDashboardHome = () => {
    let [allUsers, setAllUsers] = useState([])

    let fetchData = async () => {
        fetch('http://localhost:4000/AllData')
            .then((responce) => responce.json())
            .then((data) => {
                // console.log(data);
                let userdata = data.map((element) => {
                    return <tr key={element.id}>
                        <td ><img src={`http://localhost:3000/${element.image}`} alt="" style={{ width: "200px" }} /></td>
                        <td >{element.price}</td>
                        <td><Link to={`/admin/edituser/${data.id}`}>Edit</Link></td>
                        <td><button>Delete</button></td>
                    </tr>
                })
                setAllUsers(userdata);
            })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (<>
        <>
            <div className="row box">
                <div className="col">
                    <><table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody style={{ display: "center" }}>
                            {allUsers}
                        </tbody>
                    </table>
                    </> : <>
                        <table>
                            <thead>
                                <tr>
                                    <th>UserName</th>
                                </tr>
                            </thead>
                            <tbody>
                                No Users found
                            </tbody>
                        </table>
                    </>
                </div>
            </div>
        </>
    </>);
}

export default AdminDashboardHome;