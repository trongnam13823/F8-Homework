import { useMemo, useState } from "react";

const products = [
    { id: 1, name: "Áo thun thể thao", price: 350000, category: "Áo", brand: "Nike" },
    { id: 2, name: "Quần jogger", price: 750000, category: "Quần", brand: "Adidas" },
    { id: 3, name: "Nón lưỡi trai", price: 250000, category: "Phụ kiện", brand: "Puma" },
    { id: 4, name: "Áo hoodie", price: 1200000, category: "Áo", brand: "Nike" },
];

const priceOptions = [
    { label: "Tất cả", value: "all" },
    { label: "Dưới 500K", value: "<500" },
    { label: "500K - 1 triệu", value: "500-1000" },
    { label: "Trên 1 triệu", value: ">1000" },
];

const categoryOptions = ["Tất cả", "Áo", "Quần", "Phụ kiện"];
const brandOptions = ["Tất cả", "Nike", "Adidas", "Puma"];

export default function Ex01() {
    const [priceFilter, setPriceFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("Tất cả");
    const [brandFilter, setBrandFilter] = useState("Tất cả");

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");
        return products.filter((product) => {
            // Lọc theo giá
            const inPriceRange = (() => {
                if (priceFilter === "all") return true;
                if (priceFilter === "<500") return product.price < 500000;
                if (priceFilter === "500-1000") return product.price >= 500000 && product.price <= 1000000;
                if (priceFilter === ">1000") return product.price > 1000000;
            })();

            // Lọc theo loại
            const inCategory = categoryFilter === "Tất cả" || product.category === categoryFilter;

            // Lọc theo thương hiệu
            const inBrand = brandFilter === "Tất cả" || product.brand === brandFilter;

            return inPriceRange && inCategory && inBrand;
        });
    }, [priceFilter, categoryFilter, brandFilter]);

    return (
        <div>
            <h2>🛍️ Danh sách sản phẩm</h2>

            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                    {priceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>

                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    {categoryOptions.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
                    {brandOptions.map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>

            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id}>
                        {p.name} - {p.price.toLocaleString()} VND - {p.category} - {p.brand}
                    </li>
                ))}
                {filteredProducts.length === 0 && <li>Không có sản phẩm phù hợp.</li>}
            </ul>
        </div>
    );
}
