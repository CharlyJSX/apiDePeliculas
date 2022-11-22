$(document).ready(function () {
  $("#button").click(function () {
    let user = $("#user").val();
    let password = $("#password").val();
    if (user == "Carlos" && password == "Mancía") {
      localStorage.user = user;
      localStorage.password = password;
      window.location.href = "./API/peliculas.html";
    } else {
      alert("Usuario no autorizado");
    }
  });
});
