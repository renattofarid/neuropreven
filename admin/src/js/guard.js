if (
  !localStorage.getItem("x-token") &&
  !window.location.pathname.includes("/admin/login")
) {
  window.location = "/admin/login.html";
}
