import productReducer from "./product/product.reducer";
import { createStore, combineReducers } from "redux";

export default createStore(
    combineReducers({
        product: productReducer,
    })
);
