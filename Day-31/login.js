document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (!email || !password || password.length < 6) {
    errorMsg.textContent = "Vui lòng nhập đầy đủ email và mật khẩu hợp lệ.";
    return;
  }

  const { access, refresh, detail } = await http.post(`/login/`, { email, password });

  if (access && refresh) {
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    window.location.href = "./index.html";
  } else {
    errorMsg.textContent = detail || "Login failed, please try again.";
  }
});
