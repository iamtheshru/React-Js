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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from '../Action/index.jsx';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='' className='my-4 '>
            <MDBContainer fluid >
                {/* <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand> */}

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-lg-0 d-flex justify-content-around text-dark'>
                        <MDBNavbarItem>
                            <Link className='nav-link mb-4 ' to="/">Home</Link>
                            {/* <MDBNavbarLink active aria-current='page' href='#'> Home </MDBNavbarLink> */}
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/about">About Us</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/contact">Contact Us</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/example">Example Us</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/login">Login</Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}