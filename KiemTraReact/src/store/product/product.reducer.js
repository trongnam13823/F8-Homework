import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT, UPDATE_PRODUCT } from "./product.types";

const initialState = {
    items: [
        // {
        //     id: 1,
        //     name: "iphone 18",
        //     categoryId: "2",
        //     orderNum: 14,
        // },
        // {
        //     id: 2,
        //     name: "ao ",
        //     categoryId: "1",
        //     orderNum: 1,
        // },
        // {
        //     id: 3,
        //     name: "iphone 19",
        //     categoryId: "1",
        //     orderNum: 12,
        // },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                items: [...state.items, { ...action.payload }],
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

        case SET_PRODUCT:
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};
