import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edituser = () => {
    const [userById, setuserById] = useState({ file: "", price: "" });
    let { id } = useParams();

    const updatedata = () => {
        fetch(`http://localhost:4000/AllData/${id}`, {
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
                // navigator('/admin/allusers')
            })
    }
    useEffect(() => {
        // if (id) {
        //     fetch(`http://localhost:4000/AllData/${id}`)
        //         .then((response) => console.log(response))
        //         // .then((data) => {
        //         //     setuserById(data);
        //         // })
        //         .catch((error) => {
        //             console.error("Error fetching data:", error);
        //         });
        // }
        updatedata()
    }, [])
    return (<>
        <div className="row box">
            <div className="col-8">
                <form>
                    <div className="row mt-3">
                        <div className="col">
                            <input className='form-control' type="file" name="file" value={userById.file} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <input type='text' placeholder='Price Change' className='form-control' name="price" value={userById.price} required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            {/* <input type="button" value="Udpate" onClick={updatedata} className='btn btn-info' /> &nbsp; */}
                            <input type="reset" className='btn btn-warning' />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default Edituser;