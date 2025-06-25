import { useState, useCallback } from "react";
import CartItem from "./CartItem";

function Ex03() {
    const [cart, setCart] = useState([
        { id: 1, name: "Áo thun", quantity: 1 },
        { id: 2, name: "Quần jeans", quantity: 2 },
        { id: 3, name: "Nón lưỡi trai", quantity: 1 },
    ]);

    const handleIncrease = useCallback((id) => {
        setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    }, []);

    const handleDecrease = useCallback((id) => {
        setCart((prev) => prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
    }, []);

    const handleRemove = useCallback((id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }, []);

    return (
        <div>
            <h2>🛒 Giỏ hàng</h2>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} />
            ))}
        </div>
    );
}

export default Ex03;
