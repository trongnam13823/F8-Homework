"use client"; // Nếu bạn đang ở Next.js 13+ App Router

import { useEffect, useState } from "react";

export default function ToLocal() {
    const [value, setValue] = useState("");

    useEffect(() => {
        // Chạy trên client
        const stored = localStorage.getItem("my-key");
        if (stored) {
            setValue(stored);
        }
    }, []);

    const saveToLocalStorage = () => {
        localStorage.setItem("my-key", value);
    };

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveToLocalStorage}>Lưu</button>
        </div>
    );
}
