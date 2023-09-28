import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

class ClassComponentMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <ol>
                            <li><Link to="whatiscomponent">What is Component in React</Link></li>
                            <li><Link to="classcompointro">Class Compo</Link></li>
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
}

export default ClassComponentMenu;
