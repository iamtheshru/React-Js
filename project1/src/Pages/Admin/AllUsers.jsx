import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Handshake } from '@mui/icons-material';
import { Link } from 'react-router-dom'


const AllUsers = () => {
    let [allUsers, setAllUsers] = useState([])
    let [loader, setLoader] = useState(false)
    // const [data, setData] = useState([]);


    let fetchData = async () => {
        // fetch("http://localhost:5000/user").then((res) => res.json())
        //     .then((response) => {
        //         setAllUsers(response)
        //         console.log(response);
        //     })
        axios.get("http://localhost:5000/user")
            .then(function (response) {
                console.log(response.data);
                let usersdatastr = response.data.map((data) => {
                    console.log(data);
                    return <tr key={data.id}>
                        <td>{data.name}</td>
                        <td><Link to={`/admin/edituser/${data.id}`}>Edit</Link></td>
                        <td><button onClick={() => deletePost(data.id)}>Delete</button></td>
                    </tr>
                })
                console.log(usersdatastr);
                setAllUsers(usersdatastr)
                setLoader(true)
            })
        // .catch(function (error) {
        //   // handle error
        //   console.log(error);
        // })
        // .finally(function () {
        //   // always executed
        // });
    }

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/user/${id}`);
            // console.log("Post deleted:", id);
            setAllUsers(allUsers.filter((post) => post.id !== id));
            fetchData();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className="row box">
                <div className="col">
                    {loader ? <><table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
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
                    </>}
                </div>
            </div>
        </>
    );
};

export default AllUsers;