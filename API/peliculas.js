$(document).ready(function () {
  let pagina = 1;

  /* const btnAnterior = $("#btnAnterior");
  const btnSiguiente = $("#btnSiguiente"); */

  $("#btnSiguiente").click(function () {
    if (pagina < 1000) {
      pagina += 1;
      cargarPeliculas();
    }
  });

  $("#btnAnterior").click(function () {
    if (pagina > 1) {
      pagina -= 1;
      cargarPeliculas();
    }
  });

  $("#cerrar").click(function () {
    window.location.href = "../index.html";
    localStorage.clear();
  });

  const cargarPeliculas = async () => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`
      );

      if (respuesta.status === 200) {
        const datos = await respuesta.json();

        let peliculas = "";
        datos.results.forEach((pelicula) => {
          peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
        });

        document.getElementById("contenedor").innerHTML = peliculas;
      } else if (respuesta.status === 401) {
        console.log("Pusiste la llave mal");
      } else if (respuesta.status === 404) {
        console.log("La película que buscas no existe");
      } else {
        console.log("Hubo un error y no sabemos que ocurrió");
      }
    } catch (error) {
      console.log(error);
    }
  };

  cargarPeliculas();
});
