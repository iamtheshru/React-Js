import { ADD_PRODUCTS, FETCH_PRODUCTS, UPDATE_PRODUCTS, ALLUSER_PRODUCTS, DELETE_PRODUCTS } from '../Action/types.jsx';


const initialState = {
    items: [], // Initial empty array for products
    cart: [], // Initial empty array for cart
    productDetail: null,
    user: []

};

const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                items: action.payload,
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
            };
        case ALLUSER_PRODUCTS:
            return {
                ...state,
                user: action.payload,
            };
        case UPDATE_PRODUCTS:
            return {
                ...state,
                items: action.payload,
            };
        case DELETE_PRODUCTS:
            return {
                ...state,
                items: action.payload,
            };
        // case DELETE_PRODUCTS:
        //     return {
        //         ...state,
        //         items: action.payload,
        //     };
        default:
            return state;
    }
};
export default reducerData;

