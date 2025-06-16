import React, { useState, useEffect } from "react";
import PostList from "./PostList";

function Ex03() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Giả lập API
        const fakeData = [
            { id: 1, title: "Giới thiệu React", content: "React là thư viện JavaScript giúp xây dựng giao diện." },
            { id: 2, title: "useState là gì?", content: "useState dùng để quản lý state trong function component." },
            { id: 3, title: "useEffect là gì?", content: "useEffect dùng để xử lý side-effect như gọi API." },
        ];

        setTimeout(() => {
            setPosts(fakeData);
        }, 1000);
    }, []);

    return (
        <div>
            <h1>Danh sách bài viết</h1>
            {posts.length > 0 ? <PostList posts={posts} /> : <p>Đang tải...</p>}
        </div>
    );
}

export default Ex03;
