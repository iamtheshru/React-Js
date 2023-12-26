import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './assets/SpecialOffers.css'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol >
                    <h2>special offers</h2>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size='7' lg='7' md='12' sm='12'  >
                    <div className="position-relative  w-100 img my-3 ">
                        <img className="w-100" src="./assets/images/banner-img-1.png" alt="" />
                        <div className="position-absolute bottom-0 start-0  banner_text_1 text-white ps-3 banner_text">
                            <h3 className="txt_cap">high quality</h3>
                            <h3 className="txt_cap">furniture</h3>
                            <p className=" w-75 ">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected </p>
                            <button className="position-absolute  bottom-0 end-0 txt_cap "><a href="#">explore now</a></button>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol size='3' lg='5' md='12' sm='12'  >
                    <div className="position-relative  w-100 img my-3   ">
                        <img className="w-100 " src="./assets/images/banner-img-2.png" alt="" />
                        <div className="position-absolute bottom-0 start-0 banner_text_1 text-white ps-4 banner_text ">
                            <h3 className="txt_cap ">Discount Upto</h3>
                            <h2 className='ms-1' size='10x'>70%</h2>
                            <p className="w-75">There are many variations of
                                passages of Lorem Ipsum available,</p>
                            <button className=" txt_cap position-absolute  bottom-0 end-0"><a href="#">buy now</a></button>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <Link to='/' className='me-2 btn bg'>All Product</Link>
                    <Link to='/chair' className='mx-2 btn  bg1'>Chair</Link>
                    <Link to='/sofa' className='mx-2 btn bg1'>Sofa</Link>
                    <Link to='/stool' className='mx-2 btn bg1'>Stool</Link>
                    <Link to='/footstool' className='mx-2 btn bg1'>Footstool</Link>
                    <Link to='/office' className='mx-2 btn bg1'>Office</Link>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}