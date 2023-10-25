import React from "react";
import { Outlet, Link } from "react-router-dom";



const FunctionComponentIntro = () => {
    return (
        <>
            <div className="row">
                <div className="col offset-6">
                    <ol>
                        <li>
                            <Link to="functioncompointro">Functional Components Intro</Link>
                            <li> <Link to="functionalcompostate">State in Functional Components</Link> </li>
                            <li> <Link to="functionalcompoprops">Props in Functional Components</Link> </li>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
};

export default FunctionComponentIntro;