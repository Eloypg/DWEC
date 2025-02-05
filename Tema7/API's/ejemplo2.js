function convertirATabla(pokemons) { 
    $("#pokemonTable tbody").empty();
  
    if (!pokemons || pokemons.length === 0) {
      console.log("No se encontraron Pokemons.");
      return;
    } 
  
    pokemons.forEach(function (pokemon) {
      console.log(pokemon); 
  
      // Realizamos una solicitud adicional para obtener los detalles del campo "base_experience"
      $.get(pokemon.url, function (detalles) {
      // Aquí tendremos los detalles completos
        console.log(detalles); 
  
        const fila = $("<tr></tr>");
        const nombreCelda = $("<td></td>").text(pokemon.name);
        const urlCelda = $("<td></td>");
        const enlace = $("<a></a>")
          .attr("href", pokemon.url) 
          .text(pokemon.url) 
          .attr("target", "_blank"); 
        urlCelda.append(enlace);
  
        // Creamos una nueva celda para el nuevo campo "base_experience"
        const experienciaCelda = $("<td></td>").text(detalles.base_experience);
   
        fila.append(nombreCelda, urlCelda, experienciaCelda);
        $("#pokemonTable tbody").append(fila);
      });
    });
  }
  
  /* MAIN */
  
  $(document).ready(function () {
    const url = "https://pokeapi.co/api/v2/pokemon/";
  
    // Hacemos la petición GET a la API
    $.get(url, function (data) {
      // Aquí estamos recibiendo la respuesta JSON desde la API.
      console.log(data);
  
      // Llamamos a la función para procesar los datos y convertirlos a una tabla
      convertirATabla(data.results);
    });
  });