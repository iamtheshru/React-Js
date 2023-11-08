import React from "react";
import { Link, Outlet } from 'react-router-dom'

const Examples = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col offset-4">
                        <h2>Examples</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3> <Link to="classComponents">Class Components</Link></h3>
                    </div>
                    <div className="col">
                        <h3><Link to='fnctionalComponents'>Functional Components</Link></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Examples;