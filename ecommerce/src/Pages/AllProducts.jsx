import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:4000/AllData")
            .then((res) => res.json())
            .then((data) => setProducts((currentdata) => [...currentdata, ...data]))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <MDBContainer>
            <MDBRow>
                <>
                    {products.map((products, index) => (
                        (
                            <MDBCol lg="4" key={index} className="mt-5 my-1">
                                <div className="card">
                                    <Link to={"/productsdetails/" + products.id}>
                                        {/* {selectedProduct && <AllDetails productId={selectedProduct.id} />} */}
                                        <div className="card w-100">
                                            <img src={products.image} alt="" style={{ aspectRatio: '4/2', objectFit: "contain", padding: "10px" }} className="w-100" />
                                            <div className="card-body text-dark" style={{ fontWeight: "800" }}>
                                                <h6 className="card-title ">{products.discription}</h6>
                                                <p className="card-text">{products.price} /-</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </MDBCol>
                        )
                    ))}
                </>
            </MDBRow>
        </MDBContainer >
    </>);
}

export default AllProducts;