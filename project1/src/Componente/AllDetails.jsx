import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllDetails = ({ productId }) => {
    const [productDetails, setProductDetails] = useState(null);
    let { id } = useParams();

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log('Response status:', response.status);

            const responseBody = await response.text();
            console.log('Response body:', responseBody);

            if (!responseBody.trim()) {
                throw new Error('Empty response body');
            }

            const productData = JSON.parse(responseBody);
            setProductDetails(productData);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    if (!productDetails) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Product Details</h1>
            <div className="card">
                <img src={productDetails?.image} className="card-img-top" alt={productDetails?.title} style={{ width: "100px", height: "100px" }} />
                <div className="card-body">
                    <h5 className="card-title">{productDetails?.title}</h5>
                    <p className="card-text">{productDetails?.description}</p>
                    <p className="card-text">
                        <strong>Price: </strong>${productDetails?.price}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AllDetails;