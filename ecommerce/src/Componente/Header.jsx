import React, { useEffect, useLayoutEffect, useState } from 'react';
import "./assets/headerstyle.css";
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
import { Link, useParams } from 'react-router-dom';
import AddToCard from '../Pages/AddToCard';

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);
    const { id } = useParams('')

    const [count, setCount] = useState(0)
    const addCard = () => {
        fetch(` http://localhost:4000/card`)
            .then((res) => { return res.json() })
            .then((response) => {
                console.log(response);
                setCount(() => response.length > 0 ? (response.length) : "");
            }).catch((error) => {
                console.log("error");
            })
    }

    useEffect(() => {
        addCard()
    }, [addCard])
    return (
        <MDBNavbar expand='lg' className='body pt-5 pb-3 ' >
            <MDBContainer fluid  >
                <MDBNavbarBrand href='#'>
                    <img src="assets/images/logo.png" alt="" />

                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} className='list'>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>

                            <Link className='text-white' to="/">Home</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>
                            <Link className='text-white' to='/'>new arrivals</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>
                            <Link className='text-white' to='/'>store</Link>
                        </MDBNavbarItem  >
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>
                            <Link className='text-white' to='/'>contact us</Link>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                    <form className='d-flex input-group w-50 px-4'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn className='text-white btn-bg' ><i class="fa-solid fa-magnifying-glass posi_ab "></i></MDBBtn>

                    </form>
                    <MDBNavbarItem >
                        <Link className='text-color px-4'><i class="fa-solid fa-2x  fa-bell"></i></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem className='  border border-top-0 border-bottom-0'>
                        <Link className='text-color px-4' to={`/addtocard/${id}`}>{count}<i class="fa-solid fa-2x fa-bag-shopping"></i></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBDropdown className='px-4 '>
                            <MDBDropdownToggle tag='a' className='nav-link text-white' role='button' >
                                Dropdown
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className=' mt-4 mr body square borde  text-center '>
                                <MDBDropdownItem className='my-2'>

                                    <Link className='text-white '>my account</Link>
                                </MDBDropdownItem>
                                <MDBDropdownItem className='my-2'>

                                    <Link className='text-white py-5'>my orders</Link>
                                </MDBDropdownItem>
                                <MDBDropdownItem className='my-2'>

                                    <Link className='text-white py-2' to="/login">login</Link>
                                </MDBDropdownItem>

                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar >
    );
}