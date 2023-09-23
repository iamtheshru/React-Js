import { Link, Outlet } from 'react-router-dom'
import React, { Component } from 'react'

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <ol>
                            <li> <Link to="ClassCompointro">Class Components Intro</Link></li>
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
}

export default ClassCompoMenu;
