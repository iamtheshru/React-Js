import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
    const [userById, setuserById] = useState({ file: "", price: "" });
    let { id } = useParams();
    let navigator = useNavigate();

    const fetchData = () => {
        fetch(`http://localhost:4000/AllData/${id}`)
            .then((response) => {
                console.log(response);
                setuserById(response)
            })
    }
    const updatedata = () => {
        // const formData = new FormData();
        // formData.append("file", userById.file);
        // formData.append("price", userById.price);

        fetch(`http://localhost:4000/AllData/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",  // sent request
                "Accept": "application/json",   // expected data sent back
            },
            body: JSON.stringify(userById),
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                console.log(response);
                navigator('/admin/allusers');
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    }
    const handleFileChange = (e) => {
        setuserById((inp) => ({ ...inp, file: e.target.files[0] }));
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <div className="row box">
            <div className="col-8">
                <form>
                    <div className="row mt-3">
                        <div className="col">
                            <input className='form-control' type="file" name="file" onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <input type='text' placeholder='Price Change' className='form-control' name="price" value={userById.price} onChange={(e) => { setuserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <input type="button" value="Udpate" onClick={updatedata} className='btn btn-info' /> &nbsp;
                            <input type="reset" className='btn btn-warning' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default Edituser;