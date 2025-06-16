function PostItem({ post }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default PostItem;
