import { useState } from "react";
import UserItem from "./UserItem";

const users = [
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" },
];

export default function Ex02() {
    const [point, setPoint] = useState(0);

    return (
        <div>
            <h2>📋 Danh sách người dùng</h2>

            <button onClick={() => setPoint((prev) => prev + 1)} style={{ marginBottom: 20 }}>
                Tăng điểm ({point})
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}
