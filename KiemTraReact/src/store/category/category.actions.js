import { SET_CATEGORY } from "./category.types";

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category,
});
