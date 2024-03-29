import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Quotation = () => {
    const [cookies, setCookie] = useCookies(["Data"]);
    let [allUsers, setAllUsers] = useState([])

    const { quantity, rate, amount, gstRate, cgst, sgst, total } = cookies.Data || {};
    const data = () => {
        console.log("cookies.Data", cookies);
        const tableRows = Object.entries(cookies || {}).map(([key, value]) => {
            return (
                <tr key={key}>
                    <td>{value.quantity}</td>
                    <td>{value.rate}</td>
                    <td>{value.amount}</td>
                    <td>{value.gstRate}</td>
                    <td>{value.cgst}</td>
                    <td>{value.sgst}</td>
                    <td>{value.total}</td>
                    {/* <td><Link to={`/edituser/${value.id}`}>Edit</Link></td> */}
                    <td><button onClick={() => deletePost(key)}>Delete</button></td>
                </tr>
            )
        });
        setAllUsers(tableRows);
    }

    const deletePost = (key) => {
        const newData = { ...cookies.Data };
        delete newData[key];
        setCookie("Data", newData);
    }

    useEffect(() => {
        data()
    }, [cookies.Data])
    return (
        <>
            <table className="mt-5 ">
                <thead className="text-center">
                    <tr>
                        <td colSpan="7" className="ps-4">Quotation </td>
                    </tr>
                    <tr className="p-4">
                        <td className="ps-4">Quantity </td>
                        <td className="ps-4">Rate </td>
                        <td className="ps-4">Amount </td>
                        <td className="ps-4">GSTRate </td>
                        <td className="ps-4">CGST </td>
                        <td className="ps-4">SGST </td>
                        <td className="ps-4">Total </td>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {/* <tr >
                        <td >{quantity}</td>
                        <td >{rate}</td>
                        <td>{amount}</td>
                        <td>{gstRate}</td>
                        <td>{cgst}</td>
                        <td>{sgst}</td>
                        <td>{total}</td>
                    </tr> */}
                    {allUsers}
                </tbody>
            </table>
        </>
    );
}

export default Quotation;
