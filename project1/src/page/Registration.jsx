import { useState } from "react";

const Registration = () => {
    const [state, setState] = useState(false);

    const setData = (event) => {
        setState((data) => ({ formData: { ...data.formData, [event.target.name]: [event.target.value] } }))
    }
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <div className="card">
                        <div className="card-header text-center">Signup</div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="uname" required onChange={setData} className="form-control" placeholder="Enter use Name" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col ">
                                        <input type='password' name="pass" required onChange={setData} className="form-control" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col text-center">
                                        <input type='submit' className="btn btn-info" />&nbsp;
                                        <input type='reset' className="btn btn-warning" />
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

export default Registration;