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
                            <li> <Link to="functionalcomponentuseeffect">Functional Component UseEffect</Link> </li>
                            <li> <Link to="functionalcomponentuselayouteffect">Functional Component UseLayouteEffect</Link> </li>
                            <li> <Link to="functionalcomponentuselayouteffect1">Functional Component UseLayouteEffect</Link> </li>
                            <li> <Link to="functionalcomponentmeno">Functional Component Meno</Link> </li>
                            <li> <Link to="functionalcomponentcallback">Functional Component CallBack</Link> </li>
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