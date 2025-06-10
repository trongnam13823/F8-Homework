http.get(`/post/`).then((data) => {
  document.getElementById("post-list").textContent = JSON.stringify(data);
});

document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  window.location.href = "./login.html";
});
