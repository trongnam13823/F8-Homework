const BASE_URL = "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com";

const http = {
  reqMiddleware: [],
  resMiddleware: [],

  middleware: {
    req: (fn) => http.reqMiddleware.push(fn),
    res: (fn) => http.resMiddleware.push(fn),
  },

  async fetch(url, opts = {}) {
    let cfg = { url: BASE_URL + url, ...opts };

    // Chạy các request middleware
    for (const mw of this.reqMiddleware) {
      cfg = mw(cfg) || cfg;
    }

    let res = await fetch(url, cfg);

    // Chạy các response middleware tuần tự
    for (const mw of this.resMiddleware) {
      res = await mw(res, cfg);
      if (res === null) return null;
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

// Middleware REQ: Thêm access_token vào header
http.middleware.req((cfg) => {
  cfg.headers = {
    ...cfg.headers,
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  };
  return cfg;
});

// Middleware RES: Nếu bị 401, làm mới token và gọi lại request ban đầu
http.middleware.res(async (res, { url, ...opts }) => {
  if (res.status !== 401) return res;

  try {
    // Gọi API để lấy token mới
    const { access, refresh } = await http.post("/login/get_new_token/", {
      refresh: localStorage.getItem("refresh"),
    });

    // Lưu token mới vào localStorage
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    // Cập nhật token mới vào headers và gọi lại request ban đầu
    opts.headers = {
      ...opts.headers,
      Authorization: `Bearer ${access}`,
    };

    // Gọi lại request ban đầu với token mới
    return await fetch(url, opts);

    // Đăng xuất nếu refresh token không được
  } catch (error) {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "./login.html";
    return null;
  }
});

// Middleware RES: parse JSON và throw nếu lỗi
http.middleware.res(async (res) => {
  const data = res instanceof Response ? await res.json() : res;

  if (!res.ok) {
    const error = new Error(data.detail || "Something went wrong");
    error.status = res.status;
    throw error;
  }

  return data;
});
