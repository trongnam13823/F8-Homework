import axios from "axios";
import { toast } from "react-toastify";
import { getHook } from "react-hooks-outside";

const api = axios.create({
    baseURL: "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalRequest = err.config;
        if (err.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refresh = localStorage.getItem("refresh_token");
                const res = await api.post("/login/get_new_token/", {
                    refresh,
                });

                localStorage.setItem("access_token", res.data.access);
                originalRequest.headers.Authorization = `Bearer ${res.data.refresh}`;
                return api(originalRequest);
            } catch (refreshError) {
                toast.error("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
                localStorage.clear();
                // window.location.href = "/"; //mất toast khi người dùng chưa kịp đọc
                const navigate = getHook("navigate");
                navigate("/");

                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(err);
    }
);

export default api;
