export const getAllProducts = (state) => state.product.items;
export const getProductById = (state, id) => state.product.items.find((product) => product.id === id);
