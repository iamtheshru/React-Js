import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </>
        )
    }
}
export default Header;
