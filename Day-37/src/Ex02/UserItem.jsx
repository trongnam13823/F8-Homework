import { memo } from "react";

function UserItem({ user }) {
    console.log("Rendering:", user.name);
    return (
        <div
            style={{
                padding: 12,
                border: "1px solid #ccc",
                borderRadius: 6,
            }}
        >
            👤 {user.name}
        </div>
    );
}

// Chỉ re-render nếu props `user` thay đổi
export default memo(UserItem);
