import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT, UPDATE_PRODUCT } from "./product.types";

export const setProduct = (product) => ({
    type: SET_PRODUCT,
    payload: product,
});

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const updateProduct = (id, product) => ({
    type: UPDATE_PRODUCT,
    payload: { id, product },
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});
