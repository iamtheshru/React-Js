import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-ld-4">
                        <ol>
                            <li><Link to="whatiscomponate">what is componate</Link></li>
                            <li><Link to="classcompointro">Class Compointro </Link></li>
                            <li><Link to="jsx">Jsx</Link></li>
                            <li><Link to="event">Event</Link></li>
                            <li><Link to="state">State</Link></li>
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
    }
};

export default ClassCompoMenu;
