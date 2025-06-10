document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  try {
    const { access, refresh } = await http.post(`/login/`, { email, password });

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    window.location.href = "./index.html";
  } catch (error) {
    errorMsg.textContent = error.message || "Login failed, please try again.";
  }
});
