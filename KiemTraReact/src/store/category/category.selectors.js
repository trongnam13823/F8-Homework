import { createSelector } from "reselect";

export const getAllCategories = (state) => state.categories.items;

export const getAllCategoriesMap = createSelector([getAllCategories], (items) =>
    items.reduce((prev, curr) => {
        prev[curr.id] = curr;
        return prev;
    }, {})
);
