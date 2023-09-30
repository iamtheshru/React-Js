import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Example = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Example</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2><Link to="classComponanet">Class Componanet</Link></h2>
                    </div>
                    <div className="col">
                        <h2><Link to="functionComponanet">Function Componanet</Link></h2>
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
}

export default Example;
