import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link, json } from "react-router-dom";

export default function App() {
    const [showBasic, setShowBasic] = useState(false);
    return (

        <header>
            <div className="top-bar_sub_w3layouts_agile">
                <h6>
                    <i className="fa fa-phone" aria-hidden="true"></i> Call Us : 00950804988436
                    <a href="contact.html">Contact Us </a>
                </h6>
                <div className="log">
                    <h5>Free delivery order over $100</h5>
                    <h5>
                        <a className="sign" href="#" data-toggle="modal" data-target="#exampleModal">
                            <i className="fas fa-user"></i> User Account</a>
                    </h5>
                </div>
                <div className="clearfix"> </div>
            </div>

            <div className="header_top" id="home">
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="row w-100 ">
                        <div className="col align-self">
                            <a className="navbar-brand" href="index.html"> <i className="far fa-gem"></i>Jewel</a>

                        </div>
                        <div className="col align-self">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        {/* <a className="nav-link cool" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a> */}
                                        <Link className="nav-link cool" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/about">About</Link>
                                        {/* <a className="nav-link cool" href="about.html">About</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/contact">Contact</Link>
                                        {/* <a className="nav-link cool" href="price.html">Pricing</a> */}
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link " to="/product">Products</Link>
                                        {/* <a className="nav-link cool" href="price.html">Pricing</a> */}
                                    {/* </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/seatselector">Seat Booking</Link>
                                        {/* <a className="nav-link cool" href="price.html">Pricing</a> */}
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle cool" href="#" onClick={() => {
                                            console.log("Called inside");
                                            setShowBasic(!showBasic)
                                        }} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Dropdown
                                            <i className="fas fa-angle-down"></i>
                                        </a>
                                        <div className={showBasic ? "dropdown-menu d-block" : "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="dropdown-item" to="/login" onClick={() => { setShowBasic(!showBasic) }}>Signin</Link>
                                            {/* <a className="dropdown-item" href="404.html">404</a> */}
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/setlocalstorage" onClick={() => { setShowBasic(!showBasic) }}>Local Storage</Link>
                                            <a className="dropdown-item" href="soon.html">SetLocalStorage</a>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/cookiesstorage" onClick={() => { setShowBasic(!showBasic) }}>Local Storage</Link>
                                            <a className="dropdown-item" href="soon.html">CookiesStorage</a>

                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link cool" href="contact.html">Contact</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                        <div className="col align-self ml-5">
                            <div className="header-search-agileits-w3ls">
                                <form action="#" method="post">
                                    <div className="search">
                                        <input className="form-control" type="search" placeholder="Search here..." name="Search" required="" />
                                    </div>

                                    <div className="sear-sub">
                                        <button className="btn btn1">
                                            <i className="fas fa-search"></i>
                                        </button>

                                    </div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        </header>

    );
}