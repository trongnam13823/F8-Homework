import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
const styles = {
    body: {
        background: "#c0c0c0",
        fontFamily: "'Raleway', sans-serif",
        color: "#666",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
    },
    form: {
        padding: "40px 50px",
        maxWidth: "300px",
        width: "100%",
        borderRadius: "5px",
        background: "#fff",
        boxShadow: "1px 1px 1px #666",
        textAlign: "center",
    },
    input: {
        width: "100%",
        display: "block",
        boxSizing: "border-box",
        margin: "10px 0",
        padding: "14px 12px",
        fontSize: "16px",
        borderRadius: "2px",
        fontFamily: "'Raleway', sans-serif",
        border: "1px solid #c0c0c0",
        transition: "0.2s",
    },
    button: {
        width: "100%",
        height: "48px",
        border: "none",
        background: "#EF5350",
        color: "white",
        fontWeight: "bold",
        transition: "0.2s",
        margin: "20px 0",
        cursor: "pointer",
    },
    title: {
        margin: "20px 0 0",
        color: "#EF5350",
        fontSize: "28px",
    },
    paragraph: {
        marginBottom: "40px",
    },
    links: {
        display: "table",
        width: "100%",
        boxSizing: "border-box",
        borderTop: "1px solid #c0c0c0",
        marginBottom: "10px",
        paddingTop: "10px",
        fontSize: "0.8em",
    },
    linkLeft: {
        display: "table-cell",
        textAlign: "left",
        textDecoration: "none",
        color: "#666",
    },
    linkRight: {
        display: "table-cell",
        textAlign: "right",
        textDecoration: "none",
        color: "#666",
    },
};

const Login = () => {
    const [email, setEmail] = useState("admin@gmail.com");
    const [password, setPassword] = useState("12345678");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || password.length < 6) {
            toast.warning("Hãy nhập email và mật khẩu hợp lệ!");
            return;
        }

        try {
            const res = await api.post("/login/", { email, password });

            console.log(res);
            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            toast.success("Đăng nhập thành công!");
            navigate("/post");
        } catch {
            toast.error("Đăng nhập thất bại! Kiểm tra lại thông tin.");
        }
    };

    return (
        <div style={styles.body}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.title}>Welcome, User!</h2>
                <p style={styles.paragraph}>Please log in</p>
                <input
                    type="email"
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                />
                <button type="submit" style={styles.button}>
                    Log In
                </button>
            </form>
        </div>
    );
};

export default Login;
