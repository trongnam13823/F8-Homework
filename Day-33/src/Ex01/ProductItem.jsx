function ProductItem({ product }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <h3>{product.name}</h3>
            <p>Giá: {product.price.toLocaleString()} VNĐ</p>
        </div>
    );
}

export default ProductItem;
