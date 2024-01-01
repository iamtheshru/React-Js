import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./../Componente/assets/allDetails.css"
import CustomHook from './../Componente/Hook/CustomHookAllDetails.jsx';

// import Card from "./Card";
const AllDetails = () => {
    const [value, setValue] = useState("1");
    const [mrp, setMrp] = useState();
    const [amount, setAmount] = useState(1);
    const [retail, setRetail] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    let { id } = useParams();
    const [productDetails, setProductDetails] = useState();
    const { handleInputChange, inp, setInp } = CustomHook({ value: "", finalPrice: "", retail: "" }, {})

    const data = async (productId, newQuantity) => {
        const res = await fetch(`http://localhost:4000/AllData/${productId}`);
        // console.log(res.stat);
        const responseId = await res.text();
        if (!responseId.trim()) {
            throw new Error('Empty response body');
        }
        const productData = JSON.parse(responseId);
        const quantity = parseInt(newQuantity, 10);
        // const amount = parseInt(parseFloat(productData.price) * 1000, 10);
        const amount = productData.price.replace(/\D/g, "");
        console.log("amount", amount);
        setMrp(amount);
        const totalAmount = amount * quantity;
        setAmount(totalAmount);
        console.log("totalAmount", totalAmount);
        const retailsDiscount = totalAmount * 10 / 100;
        setRetail(retailsDiscount)

        const finalPrices = totalAmount - retailsDiscount
        console.log("totalAmount", finalPrices);
        setFinalPrice(finalPrices)

    }
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setValue(newQuantity);

        data(id, newQuantity);
    };

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
            data(id, value)
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

    const removeData = () => {
        setAmount('')
        setRetail('')
        setFinalPrice('')
    }




    const savedata = () => {
        const requestData = {
            ...inp,  // Include data from the state
            retail,
            value,
            finalPrice
            // Include retail value
        };
        fetch('http://localhost:4000/card', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                // Handle success or further actions
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <MDBContainer >
            <MDBRow className="d-flex justify-content-between color">
                <MDBCol className="mt-5 pt-5  card" lg='7'>
                    <MDBRow>
                        <MDBCol className="category_img" >
                            <div className="cart_product_img">
                                <img
                                    src={productDetails.image}
                                    className="img_100"
                                    alt={productDetails.title}
                                />
                            </div>
                            <div className="cart_product_text">
                                <h5 className="txt_cap">enter pincode for delivery details</h5>
                            </div>
                            <div className="cart_product_btn">
                                <Link to='/allproduct'>move to wishlist</Link>
                                <button onClick={removeData}>Remove</button>
                            </div>
                        </MDBCol>
                        <MDBCol >
                            <div className="cart_product_title">
                                <p>Acropolis Sheesham Wood King Size Bed In Provincial Teak Finish With Drawer Storage</p>
                            </div>
                            <div className="quantity" >
                                <select name="quantity" id="quantity" onChange={handleQuantityChange}>
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
                            <div className="d-flex justify-content-between dashed_btm mrp_retail">
                                <h3 className="txt_up">mrp</h3>
                                <h3 id="mrp">&#8377;{mrp}</h3>
                            </div>

                            <div className="d-flex justify-content-between dashed_btm mrp_retail mt-2">
                                <h3 className="txt_up">Amount</h3>
                                <h3 id="amount_by_quantity">&#8377;{amount}</h3>
                            </div>

                            <div className="d-flex justify-content-between dashed_btm mrp_retail mt-2">
                                <h3 className="txt_cap">retail discount</h3>
                                <input type="hidden" name="discount_percent" value="10" id="discount_percent" />
                                <h3 id="retail_discount">-&#8377;{retail}</h3>
                            </div>

                            <div className="d-flex justify-content-between dashed_btm mrp_retail mt-2">
                                <h3 className="txt_cap">item price</h3>
                                <h3 id="item_price">&#8377;{finalPrice}</h3>
                            </div>

                            <div className="d-flex  warranty  my-3">
                                <input className="warranty" type="checkbox" />
                                <div className="warranty_text align-content-center">
                                    <h6>1 Year of Furniture Protection</h6>
                                    <p>Only ₹9/Day</p>
                                </div>
                            </div>


                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg='5' className="mr-10">
                    <div className="pincode mt-5">
                        <input type="text" placeholder="Enter Pincode" />
                    </div>
                    <div className="coupan">
                        <p>apply coupan</p>
                        <h4>You Earned 14125 Extra Credits Worth ₹14,125 for
                            Your Next Purchase, Credits Expire in 14 Days.</h4>
                    </div>

                    <div className="cart_summary">

                        <div className="summary_title">
                            <h2>cart summary</h2>
                        </div>
                        <div className="d-flex justify-content-between total_items dashed_btm ">
                            <h3 className="txt_cap">items in cart</h3>
                            {/* <h3>{value}</h3> */}
                            <input type="text" value={value} name="value" />
                        </div>

                        <div className="d-flex justify-content-between total_items dashed_btm mt-2">
                            <h3 className="txt_cap">cart total price</h3>
                            {/* <h3>&#8377;{finalPrice}</h3> */}
                            <input type="text" value={finalPrice} name="finalPrice" />

                        </div>
                        <div className="total_payment total_items">
                            <div className="d-flex justify-content-between">
                                <h6 className="txt_up">you pay<span className="tax"> (Inclusive of All Taxes)</span>
                                </h6>
                                {/* <h3>&#8377;{finalPrice}</h3> */}
                                <input type="text" value={finalPrice} />

                            </div>

                            <div className="d-flex justify-content-between ">
                                <h6 className="txt_up aa">you saved</h6>
                                {/* <h3 className="color">&#8377;{retail}</h3> */}
                                <input type="text" value={retail} name="retail" onChange={handleInputChange}
                                />

                            </div>
                            <button onClick={savedata}>Click</button>
                        </div>
                    </div>
                    <div className=" gstin d-flex justify-content-between align-content-center ">
                        <h6 className="">Use GSTIN For Business Purchase (Optional)</h6>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>

                    <div className="checkout">
                        <Link
                            className="txt_up"
                            to={`/card/${id}`} // Assuming products is the data you want to pass
                            state={{ productDetails, finalPrice, retail, value }}
                            onClick={savedata}
                        > Add to card
                        </Link>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
    );
};

export default AllDetails;
