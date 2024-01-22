import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Chair = () => {
    const [products, setProducts] = useState([]);
    const [products1, setProducts1] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:4000/ChairCategory")
            .then((res) => res.json())
            .then((data) => setProducts(data))

    }
    const fetchData1 = () => {
        fetch("http://localhost:4000/ChairData")
            .then((res) => res.json())
            .then((data) => setProducts1(data))

    }

    useEffect(() => {
        fetchData()
    }, [])


    useEffect(() => {
        fetchData1()
    }, [])
    return (<>
        <MDBContainer>
            <MDBRow>
                <>
                    <MDBCol md="1" className="mt-5 my-2">
                        <span>Chairs<p>short by latest</p></span>
                    </MDBCol>
                    {products.map((products, index) => (
                        (
                            <MDBCol md="2" key={index} className="mt-5 my-2">
                                <div className="card">
                                    <Link to={"/productsdetails/" + products.id}>
                                        <div className="card w-100">

                                            <img src={products.image} alt="" style={{ aspectRatio: '1/1', objectFit: "contain" }} className="w-100" />
                                            <div className="card-body">
                                                <h5 className="card-title">{products.discription}</h5>
                                                <p className="card-text">{products.price}</p>
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
    </>)
}
export default Chair;