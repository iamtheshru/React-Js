import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import AllDetails from './AllDetails'; // Adjust the path based on your project structure

const ProductApi = () => {
    const [product, setProduct] = useState([]);
    const [loadall, setloadll] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchData = useCallback(async () => {
        const response = await fetch(
            `https://fakestoreapi.com/products`
        );
        const nextData = await response.json();
        setProduct((currentData) => [...currentData, ...nextData])
    })
    const product1 = async () => {
        setloadll(!loadall)
    }
    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleProductClick = (clickedProduct) => {
        setSelectedProduct(clickedProduct);
    };
    return (<>
        <div className="container">
            <MDBRow>
                {loadall ? <>{product.map((product, index) => (
                    (
                        <MDBCol md='3' className="mt-2" key={index}>
                            <div className="card" onClick={() => handleProductClick(product)}>
                                <Link to={"/productsdetails/" + product.id}>
                                    <div class="card">
                                        <img src={product.image} alt={product.title} style={{ aspectRatio: '1/1', objectFit: 'contain' }} class="card-img-top" />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            {/* <Link to="/manymore">More Details</Link> */}
                                            {product.price}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </MDBCol>
                    )
                ))}</> : <>
                    {product.map((product, index) => (
                        index < 4 && (
                            <MDBCol md='3' key={index}>
                                <div className="card" onClick={() => handleProductClick(product)}>
                                    <Link to={"/productsdetails/" + product.id}>
                                        <div class="card">
                                            <img src={product.image} alt={product.title} style={{ aspectRatio: '1/1', objectFit: 'contain' }} class="card-img-top" />
                                            <div class="card-body">
                                                <h5 class="card-title">{product.title}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                {/* <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a> */}
                                                {/* <Link to="/manymore">More Details</Link> */}
                                                {product.price}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </MDBCol>
                        )
                    ))}
                </>}
            </MDBRow>

            <MDBRow className="my-3 text-center">
                <MDBCol>
                    <button onClick={product1} className="btn btn-primary ">Many More</button>
                    {/* <Link className="btn btn-primary" to="/allproducts">More Details</Link> */}
                </MDBCol>
                {selectedProduct && <AllDetails productId={selectedProduct.id} />}
            </MDBRow>
        </div>

    </>);
}

export default ProductApi;