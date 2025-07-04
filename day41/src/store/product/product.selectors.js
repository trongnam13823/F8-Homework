export const getAllProducts = (state) => state.product.items;

export const getSearchTerm = (state) => state.product.searchTerm;

export const getFilteredProducts = (state) => {
    let { items, searchTerm } = state.product;

    if (!searchTerm) return items;
    return items.filter((product) => {
        const id = String(product.id).toLowerCase();
        const name = product.name.toLowerCase();
        searchTerm = searchTerm.toLowerCase();

        return name.includes(searchTerm) || id.includes(searchTerm);
    });
};

export const getProductById = (state, id) => state.product.items.find((product) => product.id === id);
