import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddToCard = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([]);
    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/card/${id}`);
            console.log('response status', response.status);
            const productData = await response.json();
            // console.log(productData);
            const productsArray = Array.isArray(productData) ? productData : [productData];
            console.log("productsArray", productsArray);
            setProducts(productsArray)
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
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
                                <div className="card">
                                    <div className="card w-100">
                                        <h5 className="card-title">{products.retail}</h5>
                                        <p className="card-text">{products.retail}</p>
                                    </div>
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