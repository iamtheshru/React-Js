import React from "react";
import CustomCard from './04propChilds.jsx';
import BikeImage from './reactSrc.jpg'


const functionalcompoprops = () => {
    return (
        <>
            <div className="row">
                <div className="col-3"> <CustomCard kaipan="Data" image="https://mdbootstrap.com/img/new/standard/nature/184.webp" /> </div>
                <div className="col"><CustomCard kaipan="Test" image={BikeImage} /></div>
                <div className="col"> <CustomCard kaipan="Something" image="/ReactPublic2.jpg" /> </div>
                <div className="col"> <CustomCard kaipan="ABC" image={`${process.env.PUBLIC_URL}/ReactPublic.svg`} /> </div>
            </div>
        </>
    );
}

export default functionalcompoprops;