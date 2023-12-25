import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const FetchProductDetails = () => {
    const [value, setValue] = useState('')
    const [mrp, setMrp] = useState('')
    let { productId } = useParams();

    const data = async (productId) => {
        console.log(value);
        const res = await fetch(`http://localhost:4000/AllData/${productId}`);
        // console.log(res.stat);
        const responseId = await res.text();
        if (!responseId.trim()) {
            throw new Error('Empty response body');
        }

        const productData = JSON.parse(responseId);
        setValue(productData.price);
        setMrp(productData.price);
        console.log(productData.price);
    }

    return (<>
        {/* {JSON.stringify()} */}
        <form action="" method='post'>
            <div className="quantity">
                <select
                    name="quantity"
                    id="quantity"
                    onChange={data}
                    value={value} // Use 'value' instead of 'defaultValue'
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <div className="d-flex justify-content-between dashed_btm mrp_retail">
                <h3 className="txt_up">mrp</h3>
                <h3 id="mrp">&#8377;84999</h3>
            </div>
        </form>
    </>);
};
export default FetchProductDetails;

