import React from "react";
import { Link, Outlet } from "react-router-dom";
const Functioncompomenu = () => {
    return (<>
        <div className="row">
            <div className="col-6 offset-6">
                <ul>
                    <li><Link to="Functionstate">Functionstate</Link></li>
                </ul>
            </div>
        </div>
        <Outlet></Outlet>
    </>);
}

export default Functioncompomenu;