import React, { useState } from "react";
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
    const [cookies, setCookie] = useCookies(['userData']);
    const [multipleData, setMultipleData] = useState([])

    const calculateResults = () => {
        const calculatedAmount = quantity * rate;
        setAmount(calculatedAmount);

        const gstAmount = (calculatedAmount * gstRate) / 100;
        setCGST(gstAmount / 2);
        setSGST(gstAmount / 2);

        const totalAmount = calculatedAmount + gstAmount;
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

    const submit = (e) => {
        e.preventDefault()
        setMultipleData((multipleData) => ([...multipleData, { quantity, rate, amount, gstRate, cgst, sgst, total }]))
    }

    const SaveData = () => {
        setCookie('Data', multipleData);
    }
    return (
        <>
            <form action="" method='post' onSubmit={submit}>
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
                            <button onClick={SaveData}>Save</button>
                        </tr>
                    </tbody>
                </table>
                <Quotation />
            </form>
        </>
    );
}

export default DashboadData;
