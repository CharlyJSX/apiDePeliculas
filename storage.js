function guadar_localStorage() {
  //Obtenemos los valores del html.
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("password").value;

  //Si el id existe en el localStorage vamos a comprobar la contraseña
  if (id in localStorage) {
    //Si la contraseña coincide le permitimos el acceso.
    if (contraseña == localStorage.getItem(id)) {
      location.href = "inicio.html";
    }
    //Si la contraseña no concuerda, le informamos de que no es correcta.
    else {
      alert("Su contraseña es incorrecta.");
    }
  } else {
    //Si el id no se encuentra, le preguntamos si quiere agregarlo.
    let answer = prompt(
      "Su Id y pass no se encuentran registrado desea guardarlos (S/N)"
    );
    if (answer == "s" || answer == "S") {
      localStorage.setItem(id, contraseña);
      document.getElementById("usuario").value = "";
      document.getElementById("contraseña").value = "";
    }
  }
}
