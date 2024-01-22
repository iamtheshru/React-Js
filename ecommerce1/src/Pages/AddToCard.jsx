import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AddToCard = () => {
    const [products, setProducts] = useState([]);
    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/card`);
            console.log('response status', response.status);
            const productData = await response.json();
            // console.log(productData);
            // const productsArray = Array.isArray(productData) ? productData : [productData];
            // console.log("productsArray", productsArray);
            setProducts(productData)
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const handleRemove = async (id) => {
        await fetch(`http://localhost:4000/card/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
            })
        console.log(id);
        fetchProductDetails(id)
    };
    useEffect(() => {
        fetchProductDetails();
    }, []);

    return (<>
        <MDBContainer>
            <MDBRow>
                <>
                    {products.map((products, index) => (
                        (
                            <MDBCol lg="4" key={index} className="mt-5 my-2">
                                <div className="cart_summary">
                                    <div className="summary_title">
                                        <h2>cart summary</h2>
                                    </div>
                                    <>
                                        <div className="d-flex justify-content-between total_items dashed_btm">
                                            <h3 className="txt_cap">items in Name</h3>
                                            {/* <h3>{products.value}</h3> */}
                                        </div>
                                        <div className="d-flex justify-content-between total_items dashed_btm">
                                            <h3 className="txt_cap">items in cart</h3>
                                            <h3>{products.value}</h3>
                                        </div>

                                        <div className="d-flex justify-content-between total_items dashed_btm mt-2">
                                            <h3 className="txt_cap">cart total price</h3>
                                            <h3>&#8377;{products.finalPrice}</h3>
                                        </div>

                                        <div className="total_payment total_items">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="txt_up">you pay<span className="tax"> (Inclusive of All Taxes)</span></h6>
                                                <h3>&#8377;{products.finalPrice}</h3>
                                            </div>

                                            <div className="d-flex justify-content-between ">
                                                <h6 className="txt_up aa">you saved</h6>
                                                <h3 className="color">&#8377;{products.retail}</h3>
                                            </div>
                                        </div>
                                        <div className="checkout">
                                            <Link to="/login">Buye</Link>
                                        </div>
                                        <button onClick={() => handleRemove(products.id)}>remove</button>
                                    </>
                                </div>
                            </MDBCol>
                        )
                    ))}
                </>
            </MDBRow >
        </MDBContainer >
    </>);
}

export default AddToCard;