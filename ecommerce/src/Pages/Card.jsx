import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

const Card = (props) => {
    let { id } = useParams();

    const { location = {} } = props;
    const { state = {} } = location;
    const { productDetails = {}, finalPrice = 0, retail = 0, quantity = 0 } = state;

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/AllData/${id}`);
            console.log('response status', response.status);

            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }

            const productData = await response.json();
            console.log(productData);

            const imagePath = `http://localhost:4000/${productData.image}`;
            console.log('Image URL:', imagePath);
            productData.image = imagePath;

            // setLoading(false);
            productDetails(productData);

            finalPrice(productData.quantity);
            console.log("productData.quantity", productData.quantity);
            console.log("productData.quantity", productData.quantity);
            const amount = parseInt(productData.price.replace(/\D/g, ''), 10);
            const totalAmount = amount * productData.quantity;
            // setFinalPrice(totalAmount);
            console.log("totalAmount", totalAmount);
            const retailsDiscount = totalAmount * 10 / 100;
            // setRetail(retailsDiscount);
        } catch (error) {
            console.error('Error fetching product details:', error);
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    return (
        <MDBContainer>
            <MDBRow className='d-flex justify-content-center'>
                <MDBCol>
                    <div className="cart_summary">
                        <div className="summary_title">
                            <h2>cart summary</h2>
                        </div>


                        <>
                            <div className="d-flex justify-content-between total_items dashed_btm">
                                <h3 className="txt_cap">items in cart</h3>
                                <h3>{quantity}</h3>
                            </div>

                            <div className="d-flex justify-content-between total_items dashed_btm mt-2">
                                <h3 className="txt_cap">cart total price</h3>
                                <h3>&#8377;{finalPrice}</h3>
                            </div>

                            <div className="total_payment total_items">
                                <div className="d-flex justify-content-between">
                                    <h6 className="txt_up">you pay<span className="tax"> (Inclusive of All Taxes)</span></h6>
                                    <h3>&#8377;{finalPrice}</h3>
                                </div>

                                <div className="d-flex justify-content-between ">
                                    <h6 className="txt_up aa">you saved</h6>
                                    <h3 className="color">&#8377;{retail}</h3>
                                </div>
                            </div>
                        </>

                    </div>
                    <Link to="/login">Click</Link>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Card;
