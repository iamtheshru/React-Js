import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let [user, setUser] = useState({ name: "", password: "" })
    let { id } = useParams()
    let navigator = useNavigate()
    const fetchData = () => {
        fetch(`http://localhost:4000/user/${id}`)
            .then((result) => {
                setUser(result);
            })
    }
    const updateData = () => {
        fetch(`http://localhost:4000/user/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",  // sent request
                "Accept": "application/json",   // expected data sent back
            }, body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((responce) => {
                navigator('/alluser')
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <input type="text" name="name" value={user.name} onChange={(e) => { setUser((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} />
        <input type="password" name="password" value={user.password} onChange={(e) => { setUser((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} />
        <button onClick={updateData}>Click</button>
    </>);
}

export default EditUser;