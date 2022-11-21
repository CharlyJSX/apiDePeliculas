function entrar() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  if (user == "Carlos" && password == "Mancía") {
    localStorage.user = user;
    localStorage.password = password;
    window.location.href = "./API/peliculas.html";
  } else {
    alert("Usuario no autorizado");
  }
}
