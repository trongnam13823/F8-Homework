import http from "./http";

export default {
    getAll: () => http.get("/categories"),
};
