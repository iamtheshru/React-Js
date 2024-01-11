import { combineReducers } from "redux";
import productReducer from './Product.js';

const rootReducer = combineReducers({
    products: productReducer,
});

export default rootReducer;