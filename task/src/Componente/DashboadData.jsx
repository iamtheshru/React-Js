import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Quotation from "./Quotation";

const DashboadData = () => {
    const [quantity, setQuantity] = useState(0);
    const [rate, setRate] = useState(0);
    const [amount, setAmount] = useState(0);
    const [gstRate, setGstRate] = useState(0);
    const [cgst, setCGST] = useState(0);
    const [sgst, setSGST] = useState(0);
    const [total, setTotal] = useState(0);
    const [cookies, setCookie, removeCookie] = useCookies(['userData']);
    const [multipleData, setMultipleData] = useState([]);

    useEffect(() => {
        if (cookies.Data) {
            setMultipleData(JSON.stringify(cookies.Data));
        }
    }, [cookies.Data]);

    const calculateResults = () => {
        const amount = quantity * rate;
        setAmount(amount);

        const gstAmount = (amount * gstRate) / 100;
        setCGST(gstAmount / 2);
        setSGST(gstAmount / 2);

        const totalAmount = amount + gstAmount;
        setTotal(totalAmount);
    }

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
        calculateResults();
    }

    const handleRateChange = (e) => {
        setRate(parseInt(e.target.value));
        calculateResults();
    }

    const handleGstRateChange = (e) => {
        setGstRate(parseInt(e.target.value));
        calculateResults();
    }
    const handleEdit = (key) => {
        const editedCookie = cookies[key];
        console.log('Edited Cookie:', editedCookie);
        setRate(parseInt(editedCookie.rate));
    };

    const submit = (e) => {
        e.preventDefault();
        const newData = { quantity, rate, amount, gstRate, cgst, sgst, total };
        console.log("newData:", newData); // Log newData
        setCookie('Data' + new Date(), JSON.stringify(newData)); // Convert to JSON string before setting the cookie
        console.log("Cookies.Data after setting:", cookies.Data); // Log the 'Data' cookie after setting it
        setMultipleData((prevData) => ([...prevData, newData]))
        setTimeout(() => {
            window.location.reload();
        }, 0);
    }
    // const SaveData = () => {
    //     removeCookie('Data' + new Date());
    //     setTimeout(() => {
    //         window.location.reload();
    //     }, 0);
    // }


    return (
        <>
            <table>
                <thead>
                    <tr className="text-center">
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Amount</th>
                        <th>GST Rate</th>
                        <th>CGST</th>
                        <th>SGST</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" /></td>
                        <td className="pad"><input type="number" onChange={handleQuantityChange} /></td>
                        <td className="pad"><input type="number" onChange={handleRateChange} /></td>
                        <td className="pad">{amount}</td>
                        <td className="pad"><input type="number" onChange={handleGstRateChange} /></td>
                        <td className="pad">{cgst}</td>
                        <td className="pad"> {sgst}</td>
                        <td className="pad">{total}</td>
                        <td className="pad"><button onClick={submit}>Save</button></td>
                        {/* <td className="pad"><button onClick={SaveData}>Remove Cookie</button></td> */}
                    </tr>
                </tbody>
            </table>
            <Quotation onEdit={handleEdit} />
        </>
    );
}

export default DashboadData;

