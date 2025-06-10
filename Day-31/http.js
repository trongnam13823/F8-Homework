const BASE_URL = "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com";

const http = {
  reqMiddleware: [],
  resMiddleware: [],

  middleware: {
    req: (fn) => http.reqMiddleware.push(fn),
    res: (fn) => http.resMiddleware.push(fn),
  },

  async fetch(url, opts = {}) {
    let cfg = { url, ...opts };

    // Chạy các request middleware
    for (const mw of this.reqMiddleware) {
      cfg = mw(cfg) || cfg;
    }

    let res = await fetch(BASE_URL + cfg.url, cfg);

    // Chạy các response middleware
    for (const mw of this.resMiddleware) {
      res = (await mw(res, cfg)) || res;
    }

    return res;
  },

  get(url) {
    return this.fetch(url, { method: "GET" });
  },

  post(url, data) {
    return this.fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
};

// Middleware REQ: 1. Thêm access_token vào header
http.middleware.req((cfg) => {
  cfg.headers = {
    ...cfg.headers,
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  };

  return cfg;
});

// Middleware RES: 1. xử lý khi token hết hạn (401)
http.middleware.res(async (res, { url, ...opts }) => {
  if (res.status === 401) {
    try {
      const { access, refresh } = await http.post("/login/get_new_token/", {
        refresh: localStorage.getItem("refresh"),
      });

      // Lưu token mới
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      // Gọi lại request ban đầu
      return await http.fetch(url, opts);
    } catch (error) {
      // Nếu không lấy được token mới, đăng xuất người dùng
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      window.location.href = "./login.html";
    }
  }
});

// Middleware RES: 2. parse JSON response
http.middleware.res(async (res) => {
  const data = res instanceof Response ? await res.json() : res;

  if (!res.ok) {
    const error = new Error(data.detail || "Something went wrong");
    error.status = res.status;
    throw error;
  }

  return data;
});
