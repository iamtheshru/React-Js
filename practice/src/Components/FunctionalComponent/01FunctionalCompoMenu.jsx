import React from "react";
import { Link, Outlet } from 'react-router-dom'

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-ld-4 offset-md-6">
                    <ol>
                        <li> <Link to="functionalcompointro">Functional Components Intro</Link> </li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};
export default FunctionalCompoMenu;