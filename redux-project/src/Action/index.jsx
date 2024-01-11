import { FETCH_PRODUCTS } from "./types";
import API from '../http-common.jsx';


export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await API.get('/products');
            dispatch({
                type: FETCH_PRODUCTS,
                payload: response.data,
            });
        } catch (error) {
            console.log('Error:', error);
        }
    };

};
