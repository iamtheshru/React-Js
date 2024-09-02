import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';
const ChildCompo = (pros) => {
    return (
        <>
            <MDBCard className='box ' >
                <div className="img-bg ">

                    <MDBCardImage src={pros.image} position='top' alt='...' className=' w-50  mt-3 mb-3  m-auto ' />
                </div>
                {/* <MDBCardBody> */}
                <div className='mt-2'>
                    {/* <MDBCardTitle>{pros.title}</MDBCardTitle> */}
                    <h5>{pros.title}</h5>
                    <h6>{pros.price}</h6>

                    {/* <MDBCardText>
                        {pros.price}
                    </MDBCardText> */}
                    <Link to="/details" className='btn mb-2 btn-bg'>Click Now</Link>
                </div>
                {/* <MDBCardBody> */}
            </MDBCard>


        </>
    );
}

export default ChildCompo;