// fe/js/auth.js
document.getElementById("register-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }),
  });

  const data = await res.json();
  if (res.ok) {
    alert("Đăng ký thành công!");
    window.location.href = "login.html";
  } else {
    alert(data.message || "Lỗi đăng ký");
  }
});

// fe/js/auth.js (tiếp tục)
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }),
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("currentUser", JSON.stringify(data.user));
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert(data.message || "Lỗi đăng nhập");
  }
});
