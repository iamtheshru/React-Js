import { useState } from "react";

const AddUser = () => {
    const [data, setData] = useState({
        file: '',
        description: "",
        price: "",
    })
    const handleInputChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleFileChange = (e) => {
        // const imagePath = `./assets/images/${data.file}`
        setData((prevData) => ({
            ...prevData,
            file: e.target.files[0],
        }));
    };
    const dataPost = () => {
        const formData = new FormData()
        formData.append("file", data.file);
        formData.append("description", data.description);
        formData.append("price", data.price);

        // if (!data.file || !data.price || !data.description) {
        //     console.log("This field is required");
        // } else {
        fetch('http://localhost:4000/AllData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  // sent request
                "Accept": "application/json",   // expected data sent back
            },
            body: formData
        })
            .then((datas) => {
                console.log(datas);
                return datas.json();
            })
            .then((result) => {
                console.log(result);
            })
        // }
    }

    return (<>
        <div className="row box">
            <div className="col-8">
                <form>
                    <div className="row mt-3">
                        <div className="col">
                            <img src={data.file} alt="Image" />
                            <input className='form-control' type="file" name="image" onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <input type='text' placeholder='Pricdiscriptione ' className='form-control' name="description" value={data.description} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <input type='text' placeholder='price ' className='form-control' name="price" value={data.price} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <input type="button" value="submit" onClick={dataPost} className='btn btn-info' /> &nbsp;
                            <input type="reset" className='btn btn-warning' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default AddUser;