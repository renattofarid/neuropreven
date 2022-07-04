if (localStorage.getItem("x-token")) {
  window.location = "/admin/testimonios.html";
}

const loginForm = document.querySelector("#loginForm");

const login = async (email, password) => {
  Swal.showLoading();
  try {
    const { data } = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYB7do92fsRT4QnWRCXGkgYAjeQAOHEFk",
      { email, password, returnSecureToken: true }
    );
    localStorage.setItem("x-token", data.idToken);
    window.location = "/admin/testimonios.html";
  } catch (error) {
    console.log(error);
    Swal.fire("Ups!", "Credenciales no válidas", "error");
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login(email.value, password.value);
});
