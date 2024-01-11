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

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';


const FunctionCompoDynamicSubMenu = () => {
    const [showBasic, setShowBasic] = useState(false);
    const cart = useSelector((state) => state.products.cart); // Get the cart items from Redux store

    const menuItems = [
        {
            title: 'Home',
            url: `/`,
        },
        {
            title: 'Shop',
            url: `/shop`,
        }, {
            title: 'about',
            url: `/about`,
        }, {
            title: 'Access Store',
            url: `/accessstore`,
        },
        {
            title: 'Services',
            url: '/services',
            submenu: [
                {
                    title: 'web design',
                    url: 'web-design',
                },
                {
                    title: 'web development',
                    url: 'web-dev',
                },
                {
                    title: 'SEO',
                    url: 'seo',
                },
            ],
        }
    ];

    const MenuData = menuItems.map((data, index) => {
        if (data.submenu != undefined) {
            var submenudata = data.submenu.map((submenu, index) => {
                return <MDBDropdownItem key={index} link>{submenu.title}</MDBDropdownItem>;
            });
        }
        if (data.submenu == null) {
            return (
                <MDBNavbarItem key={index}>
                    <Link className='nav-link' to={data.url}>
                        {data.title}
                    </Link>
                </MDBNavbarItem>
            );
        } else {
            return (
                <MDBNavbarItem key={index}>
                    <MDBDropdown>
                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                            {data.title}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>{submenudata}</MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
            );
        }
    });

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light' className='sticky-top' >
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='ms-auto w-auto mb-2 mb-lg-0 '>
                            {MenuData}
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/cart'>
                                    <div className="cart">
                                        <span className="count">{cart.length}</span>

                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    {/* Cart <span className='badge bg-primary'></span> */}
                                </Link>
                            </MDBNavbarItem>


                            <MDBNavbarItem>
                                <Link className='nav-link btn btn-primary text-light' to='/login'>
                                    Login
                                </Link>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default FunctionCompoDynamicSubMenu;