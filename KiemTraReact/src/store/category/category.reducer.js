import { SET_CATEGORY } from "./category.types";

const initialState = {
    items: [
        // {
        //     id: "1",
        //     name: "Clothes",
        // },
        // {
        //     id: "2",
        //     name: "Phone",
        // },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};
