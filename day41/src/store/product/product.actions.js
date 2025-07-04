import { ADD_PRODUCT, DELETE_PRODUCT, SET_SEARCH_TERM, UPDATE_PRODUCT } from "./product.types";

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

export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
});
