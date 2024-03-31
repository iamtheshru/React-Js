import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

const Quotation = ({ onEdit }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['Data' + new Date()]); // include removeCookie
    const [allUsers, setAllUsers] = useState([]);
    const [editData, setEditData] = useState(null); // State to hold the data of the item being edited

    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);

    useEffect(() => {
        data();
    }, [cookies]);

    const data = () => {
        const tableRows = Object.entries(cookies || {}).map(([key, value]) => {
            return (
                <tr key={key}>
                    <td><input type="number" value={value.quantity} readOnly /></td>
                    <td><input type="number" value={value.rate} readOnly /></td>
                    <td>{value.amount}</td>
                    <td><input type="number" value={value.gstRate} readOnly /></td>
                    <td>{value.cgst}</td>
                    <td>{value.sgst}</td>
                    <td>{value.total}</td>
                    <td><button onClick={() => deletePost(key)}>Delete</button></td>
                    <td><button onClick={() => handleEdit(key)}>Edit</button></td> {/* Use handleEdit instead of onEdit */}
                </tr>
            )
        });
        setAllUsers(tableRows);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Perform calculations based on the changed input field
        if (name === "quantity" || name === "rate" || name === "gstRate") {
            const quantity = parseFloat(name === "quantity" ? value : editData.quantity);
            const rate = parseFloat(name === "rate" ? value : editData.rate);
            const gstRate = parseFloat(name === "gstRate" ? value : editData.gstRate);

            const amount = quantity * rate;
            const cgst = (amount * gstRate) / 200;
            const sgst = cgst;
            const total = amount + cgst + sgst;

            setEditData(prevState => ({
                ...prevState,
                amount: amount,
                cgst: cgst,
                sgst: sgst,
                total: total
            }));
        }
    };

    const handleEdit = (key) => {
        const editedData = cookies[key];
        editedData.key = key; // Assign the key to the edited data object
        setEditData(editedData);
    };

    const saveChanges = () => {
        setCookie(editData.key, editData); // Update cookie with edited data
        setEditData(null); // Reset editData state
        setTimeout(() => {
            window.location.reload();
        }, 0);
    };

    const deletePost = (key) => {
        removeCookie(key);
        data();
        setTimeout(() => {
            window.location.reload();
        }, 0);
    }

    return (
        <>
            <table className="mt-5">
                <thead className="text-center">
                    <tr>
                        <td colSpan="7" className="ps-4">Quotation</td>
                    </tr>
                    <tr className="p-4">
                        <td className="ps-4">Quantity</td>
                        <td className="ps-4">Rate</td>
                        <td className="ps-4">Amount</td>
                        <td className="ps-4">GSTRate</td>
                        <td className="ps-4">CGST</td>
                        <td className="ps-4">SGST</td>
                        <td className="ps-4">Total</td>
                        <td className="ps-4">Actions</td>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {allUsers}
                </tbody>
            </table>
            {editData && (
                <div>
                    <h5>Edit Item</h5>
                    <MDBBtn onClick={toggleOpen}>Edit Data</MDBBtn>
                    <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                        <MDBModalDialog>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle>Modal title</MDBModalTitle>
                                    <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                    <span>Quantity : </span>
                                    <input type="number" name="quantity" value={editData.quantity} onChange={handleInputChange} />
                                </MDBModalBody>
                                <MDBModalBody>
                                    <span >Rate : </span>
                                    <input className="ms-4" type="number" name="rate" value={editData.rate} onChange={handleInputChange} />
                                </MDBModalBody>
                                <MDBModalBody>
                                    <span>GstRate : </span>
                                    <input type="number" name="gstRate" value={editData.gstRate} onChange={handleInputChange} />
                                </MDBModalBody>

                                <MDBModalFooter>
                                    <MDBBtn color='secondary' onClick={toggleOpen}>
                                        Close
                                    </MDBBtn>
                                    <MDBBtn onClick={saveChanges}>Save Changes</MDBBtn>
                                </MDBModalFooter>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>
                </div>
            )}
        </>
    );
}

export default Quotation;
