import { FETCH_PRODUCTS } from '../Action/types.jsx';


const initialState = {
    items: [], // Initial empty array for products
    cart: [], // Initial empty array for cart
    productDetail: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default productsReducer;