import { forwardRef, useState } from "react";

const Login = () => {
    const [state, setState] = useState({ formData: " " })
    const setData = (event) => {
        setState((data) => ({ formData: { ...data.formData, [event.targe.name]: [event.targe.value] } }))
    }
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <div className="card">
                        <div className="card-header">login</div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-lg-4 offset-lg-4">
                                        <label>UserName</label>
                                        {/* <input type="text" placeholder="Enter User Name" className="form-control" name="uname" required onChange={(event) => setState((data) => ({ formData: { ...data.formdata, [event.target.name]: [event.target.value] } }))} /> */}
                                        <input type="text" onClick={setData} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Login; <>
    <div className="container">
        <div className="row">
            <div className="col">

            </div>
        </div>
    </div>
</>