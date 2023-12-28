import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
const Card = () => {
    return (<>
        <MDBContainer>
            <MDBRow>
                <MDBCol lg="6">
                    <div className="cart_product_img">
                        <img
                            src={productDetails.image}
                            className="img_100"
                            alt={productDetails.title}
                        />
                    </div>
                </MDBCol>
                <MDBCol lg="6">
                    <Link className="txt_up" to="/login"> onClick</Link>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>);
}

export default Card;