import React, { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("/post/")
            .then((res) => setPosts(res.data))
            .catch(() => {
                toast.error("Không thể lấy dữ liệu bài viết");
            });
    }, []);

    return (
        <div>
            <h1>Post</h1>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    );
};

export default Post;
