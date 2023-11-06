import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
class Classcompomenu extends Component {
     
    render() { 
        return (
        <>
            <ul>
                <li><Link to="List">List</Link></li>
            </ul>
            <ul>
                <li><Link to="Classstate">Classstate</Link></li>
            </ul>
            <Outlet></Outlet>
        </>);
    }
}
 
export default Classcompomenu;