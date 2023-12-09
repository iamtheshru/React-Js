import { useEffect, useState } from "react";

const AllDetails = () => {
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const productData = await response.json();
            setProductDetails(productData);
        };

        fetchProductDetails();
    }, [productId]);

    if (!productDetails) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Product Details</h1>
            <div className="card">
                <img src={productDetails?.image} className="card-img-top" alt={productDetails?.title} />
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