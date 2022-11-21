$(function () {
  let user = $("#user").value;
  let password = $("#password").value;
  $("#button").click(function validarUsuario() {
    console.log / "Hola";
    if (user == "Carlos" && password == "Mancía") {
      localStorage.user = user;
      localStorage.password = password;
      window.location.href = "./API/peliculas.html";
    } else {
      alert("Usuario no autorizado");
    }
  });
});
