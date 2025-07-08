import http from "./http";

export default {
    getAll: () => http.get("/products"),
    add: (data) => http.post("/products", data),
    put: (id, data) => http.put("/products/" + id, data),
    delete: (id) => http.delete("/products/" + id),
};
