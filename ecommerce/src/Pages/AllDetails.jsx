import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const AllDetails = () => {
    let { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/AllData/${id}`);
            console.log('response status', response.status);

            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }

            const productData = await response.json();

            // Assuming productData.image is a relative path to the image
            const imagePath = `http://localhost:4000/${productData.image}`;
            console.log('Image URL:', imagePath);
            // Update the productData with the absolute image path
            productData.image = imagePath;

            // Set the updated productData in the state
            setProductDetails(productData);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    if (!productDetails) {
        return <p>Loading...</p>;
    }

    return (
        <MDBContainer >
            <MDBRow className="d-flex justify-content-between">
                <MDBCol className="mt-5">
                    <MDBRow>
                        <MDBCol>
                            <img
                                src={productDetails.image}
                                className="card-img-top w-100"
                                alt={productDetails.title}
                            />
                            <p>Enter Pincode For Delivery Details</p>
                            <Link to='/allproduct'>move to wishlist</Link>
                        </MDBCol>
                        <MDBCol>
                            <p>Acropolis Sheesham Wood King Size Bed In Provincial Teak Finish With Drawer Storage</p>
                            <div className="quantity">
                                <select name="quantity" id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h3 className="txt_up">mrp</h3>
                                <h3 id="mrp">&#8377;84999</h3>
                            </div>

                            <div className="d-flex justify-content-between">
                                <h3 className="txt_up">Amount</h3>
                                <h3 id="amount_by_quantity">&#8377;84999</h3>
                            </div>

                            <div className="d-flex justify-content-between">
                                <h3 className="txt_cap">retail discount</h3>
                                <input type="hidden" name="discount_percent" value="10" id="discount_percent" />
                                <h3 id="retail_discount">-&#8377;14,335</h3>
                            </div>

                            <div className="d-flex justify-content-between">
                                <h3 className="txt_cap">item price</h3>
                                <h3 id="item_price">&#8377;70,624</h3>
                            </div>

                            <div className="d-flex justify-content-between ">
                                <input className="warranty" type="checkbox" />
                                <div className="warranty_text align-content-center">
                                    <h4>1 Year of Furniture Protection</h4>
                                    <p>Only ₹9/Day</p>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol>
                    <div className="">
                        <input type="text" placeholder="Enter Pincode" />
                    </div>
                    <div className="">
                        <p>apply coupan</p>
                        <h4 >You Earned 14125 Extra Credits Worth ₹14,125 for
                            Your Next Purchase, Credits Expire in 14 Days.</h4>
                    </div>
                    <div className="summary_title">
                        <h2>cart summary</h2>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h3 className="txt_cap">items in cart</h3>
                        <h3>1</h3>
                    </div>

                    <div className="d-flex justify-content-between">
                        <h3 className="txt_cap">cart total price</h3>
                        <h3>&#8377;70,624</h3>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                            <h2 className="txt_up">you pay<span className="tax"> (Inclusive of All Taxes)</span>
                            </h2>
                            <h3>&#8377;70,624</h3>
                        </div>

                        <div className="d-flex justify-content-between">
                            <h4 className="txt_up">you saved</h4>
                            <h3 >&#8377;14,375</h3>
                        </div>
                    </div>
                    <div class="checkout">
                        <a class="txt_up" href="#">proceed to checkout</a>
                        <a class="txt_cap remove" href="#">remove</a>
                        <button></button>

                    </div>


                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default AllDetails;
