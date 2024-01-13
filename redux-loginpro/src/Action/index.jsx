import { useNavigate } from "react-router-dom";
import { ADD_PRODUCTS, FETCH_PRODUCTS } from "./types";
// import API from '../httpcom';
import axios from "axios";

// export const useFetchProducts = () => {
// const navigate = useNavigate();
export const fetchProducts = (name, password, navigate) => {
    // console.log("action", name, password);
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:5000/posts?name=${name}&password=${password}`)
            console.log(response);
            if (response.data.length > 0) {
                console.log(response.data[0].role);
                if (response.data[0].role === "1") {
                    navigate("/admin");
                    console.log("bbb");
                    // console.log(response.data[0].role);
                } else {
                    navigate("/");
                    console.log("aaa");

                }
            }
            dispatch({
                type: FETCH_PRODUCTS,
                payload: response,
            });
        } catch (error) {
            console.log('Error:', error);
        }
    };
};
// return fetchProducts;
// }

export const postProducts = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/posts', data
                // {
                //     "uname": "test",
                //     "email": "test@mail.com",
                //     "pass": "456",
                //     "role": 2
                // }
            );
            console.log(response.data);
            dispatch({
                type: ADD_PRODUCTS,
                payload: response.data,
            });
        }
        catch (ERROR) {
            console.log(ERROR, "Error");
        }
    }

}
