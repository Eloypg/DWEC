/* Función para convertir la lista de Pokemons a una tabla HTML */
function convertirATabla(pokemons) {
    // Limpiamos la tabla antes de agregar los datos nuevos, por si ya existía una con otros datos
    $('#pokemonTable tbody').empty();
  
    // Para cada pokemon, lo agregamos a la tabla
    pokemons.forEach(function(pokemon) {
      // Creamos una fila para cada Pokémon
      const fila = $("<tr></tr>");
      const nombreCelda = $("<td></td>").text(pokemon.name);
      
      // Creamos una celda para la URL como enlace clicable
      const urlCelda = $("<td></td>");
      const enlace = $("<a></a>")
        .attr("href", pokemon.url)    // Establecemos la URL como href
        .text(pokemon.url)            // El texto del enlace también será la URL
        .attr("target", "_blank");    // Establecemos que el enlace se abra en una nueva pestaña
  
      // Añadimos el enlace a la celda de URL
      urlCelda.append(enlace);
  
      // Añadimos las celdas a la fila
      fila.append(nombreCelda, urlCelda);
  
      // Añadimos la fila a la tabla
      $('#pokemonTable tbody').append(fila);
    });
  }
  
  
  $(document).ready(function () {
    // Rompemos la URL para provocar un error y ver la salida
    //const url = "https://pokeapi.co/api/v2/pokemon/";
    const url = "https://pokeapi.co/api/v2/gfdgf";       
  
    // Hacemos la petición GET a la API con manejo de errores
    $.get(url)
      .done(function (data) {
        // Petición exitosa. Mostramos los datos en la consola
        console.log("Éxito. Datos obtenidos:", data);
  
        // Recibimos la respuesta JSON desde la API.
        console.log(`------------------------------------`);
        console.log(`Datos petición:`);
        console.log(`Tipo de los datos: `, typeof data); // jQuery parsea el JSON a un object
        console.log(data);
  
        // Si lo quiero en JSON string
        let dataJSON = JSON.stringify(data);
        console.log("JSON en formato string:\n", dataJSON);
  
        // Procesamos los datos: Llamar a la función para convertir los datos en una tabla
        convertirATabla(data.results);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        // Manejo del error
        console.error("**Error en la petición:", textStatus, errorThrown);     
        $("#mensaje").text("**Error al obtener los datos de Pokémon. Intenta nuevamente.").css("color", "red");
        // alert("**Error al obtener los datos. Inténtalo de nuevo más tarde.");
      })
      .always(function () {
        console.log("Petición completada.");
      });
  });
