import { ADD_PRODUCT, DELETE_PRODUCT, SET_SEARCH_TERM, UPDATE_PRODUCT } from "./product.types";

const initialState = {
    items: [
        {
            id: 1,
            name: "Táo Mỹ",
            price: 85000,
            quantity: 20,
            unit: "kg",
        },
        {
            id: 2,
            name: "Cam Sành",
            price: 45000,
            quantity: 15,
            unit: "kg",
        },
        {
            id: 3,
            name: "Xoài Cát",
            price: 120000,
            quantity: 8,
            unit: "kg",
        },
    ],
    searchTerm: "",
    lastId: 3,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const newId = state.lastId + 1;
            return {
                ...state,
                items: [...state.items, { ...action.payload, id: newId }],
                lastId: newId,
            };
        }

        case UPDATE_PRODUCT:
            return {
                ...state,
                items: state.items.map((product) =>
                    product.id === action.payload.id ? { ...product, ...action.payload.product } : product
                ),
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter((product) => product.id !== action.payload),
            };

        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };

        default:
            return state;
    }
};
