import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p><Link to="classcompointro">ClassCompoInto</Link></p>
                            <p><Link to="jsx">Jsx</Link></p>
                            <p><Link to="event">Event</Link></p>
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
}
export default ClassCompoMenu;
