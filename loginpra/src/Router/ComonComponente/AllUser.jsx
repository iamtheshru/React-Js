import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllUser = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/user')
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                let reponce = result.map((e) => {
                    return <>
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.password}</td>
                            <td><Link to={`/edituser/${e.id}`}>Edit</Link></td>
                            <td><button onClick={() => deleteData(e.id)}>Delete</button></td>
                        </tr>
                    </>

                })
                // console.log(reponce);
                setData(reponce);
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:4000/user/${id}`);
        setData(data.filter((post) => post.id !== id));
        fetchData();
    };


    return (<>
        <table>
            <tr>
                <td>{data}</td>
                {/* <td>aa</td> */}
            </tr>
        </table>
    </>);
}

export default AllUser;