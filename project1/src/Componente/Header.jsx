import React, { useState } from "react";

const Header = () => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <>
            <div className="banner_header_top_wthree">
                <div className="agileits-logo">
                    <h1><a href="index.html"> <i className="fa fa-scissors" aria-hidden="true"></i> Stitchery</a></h1>
                </div>
                <div className="header-top_agileits">
                    <div className="container">
                        <nav className="navbar navbar-default">
                            <div className="navbar-header navbar-left">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                                <nav className="link-effect-2" id="link-effect-2">
                                    <ul className="nav navbar-nav position-relative">
                                        <li className="scroll active" ><a href="index.html"><span data-hover="Home">Home</span></a></li>
                                        <li><a href="#welcome" className="scroll"><span data-hover="About">About</span></a></li>
                                        <li><a href="#services" className="scroll"><span data-hover="Services">Services</span></a></li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={() => { setShowBasic(!showBasic) }}><span data-hover="Drop Down">Drop Down</span> <b className="caret"></b></a>
                                            <ul className={showBasic ? "agile_short_dropdown display-block" : " dropdown-menu"} style={{ position: "absolute" }}>
                                                <li><a href="#team" className="scroll">Team</a></li>
                                                <li><a href="#gallery" className="scroll">Gallery</a></li>
                                                <li><a href="#clients" className="scroll  position-absolute top-50 z-1">Clients</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#contact" className="scroll"><span data-hover="Contact">Contact</span></a></li>
                                    </ul>
                                </nav>
                                <div className="w3_agile_phone">
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> +123 234 233</p>
                                </div>
                            </div>

                        </nav>

                    </div>
                </div >
            </div >
        </>
    );
}

export default Header;