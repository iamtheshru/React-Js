import React from "react";
import { Link, Outlet } from "react-router-dom";
const Example = () => {
    return (<>
        <div className="container mt-3">
            <div className="row">
                <div className="col-6">
                    <h3>
                        <Link to="Classcompo">Class Component</Link>
                    </h3>
                </div>
                <div className="col-6">
                    <h3>
                        <Link to="FunctionCompo">Function Component</Link>
                    </h3>
                </div>
                    <div className="my-3">
                        <div className="col-md-12">
                            <Outlet></Outlet>
                        </div>
                    </div>
            </div>
        </div>
    </>);
}

export default Example;