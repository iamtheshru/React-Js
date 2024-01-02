// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import cartReducer  from "./reducers/cartReducer.js";

const store = createStore(cartReducer);
export default store;