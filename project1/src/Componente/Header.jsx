import { useState } from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
    return (<>

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
                    <a className="navbar-brand" href="index.html">
                        <i className="far fa-gem"></i>Jewel</a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                {/* <a className="nav-link cool" href="index.html">Home
                                    <span className="sr-only">(current)</span>
                                </a> */}
                                <Link className="nav-link cool" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link cool" href="about.html">About</a> */}
                                <Link className="nav-link cool" to="/about">About</Link>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link cool" href="price.html">Pricing</a> */}
                                <Link className="nav-link cool" to="/contact">Contact</Link>

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle cool" href="#" onClick={() => { setShowBasic(!showBasic) }} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Dropdown
                                    <i className="fas fa-angle-down"></i>
                                </a>
                                <div className={showBasic ? "dropdown-menu display-block" : "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink"  >
                                    {/* <a className="dropdown-item" href="404.html">404</a> */}
                                    <Link className="dropdown-item" to="/login" onClick={() => { setShowBasic(!showBasic) }}>Loing</Link>
                                    {/* <div className="dropdown-divider"></div> */}
                                    {/* <a className="dropdown-item" href="soon.html">Comingsoon</a> */}

                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="header-search-agileits-w3ls">
                        <form action="#" method="post">
                            <div className="search">
                                <input className="form-control" type="search" placeholder="Search here..." name="Search" required="" />
                            </div>
                            <div className="section_room">
                                <select id="country" onchange="change_country(this.value)" className="frm-field required">
                                    <option value="null">All Items</option>
                                    <option value="null">Gold </option>
                                    <option value="AX">Rings </option>
                                    <option value="AX">Watches</option>
                                    <option value="AX">Necklace</option>
                                    <option value="AX">Bracelets</option>
                                </select>
                            </div>
                            <div className="sear-sub">
                                <button className="btn btn1">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </nav>

            </div>
        </header>
    </>);
}

export default Header;