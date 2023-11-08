import React from "react";
import { Outlet, Link } from "react-router-dom";



const FunctionComponentIntro = () => {
    return (
        <>
            <div className="row">
                <div className="col offset-6">
                    <ol>
                        <li><Link to="useeffectex1">useEffectEx-1</Link></li>
                        <li><Link to="useeffectex2">useEffectEx-2</Link></li>
                        <li><Link to="useeffectex3">useEffectEx-3</Link></li>
                        <li><Link to="useeffectex4">useEffectEx-4</Link></li>
                        <li><Link to="useeffectEx5">useEffectEx-5</Link></li>
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