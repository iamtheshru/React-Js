import React from 'react';
import ChildCompo from './../Componente/ChildCompo.jsx'
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
            <section className='mt-2 mb-2'>
                <div className="container bg pb-3 pt-3 ">
                    <div className="row text-center square border-bottom border-dark m-2">
                        <div className="col clr">
                            Pooja
                        </div>
                    </div>
                    <div className="row text-center mt-3 mb-3 square border rounded-3 m-5 border-2 border-dark">
                        {/* <div className="col-sm-6 square border-end   ">
                            Pooja
                        </div> */}
                        <Link to="/" className="col-sm-6 square border-end clr border-dark">Pooja</Link>
                        <Link to="/" className="col-sm-6 clr">  Pooja Booked</Link>
                        {/* <div className="col-sm-6 ">
                            Pooja Booked
                        </div> */}
                    </div>
                    <div className="row text-center  " >
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img1.PNG`} title='Shanti Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center ">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img2.PNG`} title='Durga Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img3.PNG`} title='Gopal Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img4.PNG`} title='Vastu Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img5.PNG`} title='Shanti Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center ">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img6.PNG`} title='Durga Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img7.PNG`} title='Gopal Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img8.PNG`} title='Vastu Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img9.PNG`} title='Shanti Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img1.PNG`} title='Shanti Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center ">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img2.PNG`} title='Durga Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img3.PNG`} title='Gopal Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img4.PNG`} title='Vastu Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img5.PNG`} title='Shanti Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center ">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img6.PNG`} title='Durga Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img7.PNG`} title='Gopal Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img8.PNG`} title='Vastu Pooja' price="RS.5,100/-" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex justify-content-center align-items-center">
                            <ChildCompo image={`${process.env.PUBLIC_URL}/assets/images/img9.PNG`} title='Shanti Pooja' price="RS.5,100/-" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>

    );
}