$(document).ready(function() {
    let pokemonList = [];
    $.get("https://pokeapi.co/api/v2/pokemon?limit=20", function(data) {
        let requests = data.results.map((pokemon, index) => 
            $.get(pokemon.url, function(details) {
                pokemonList.push({
                    id: details.id,
                    name: pokemon.name,
                    image: details.sprites.front_default
                });
            })
        );
        
        $.when.apply($, requests).then(function() {
            pokemonList.sort((a, b) => a.id - b.id);
            pokemonList.forEach(pokemon => {
                $("#pokemonTable").append(
                    `<tr><td>${pokemon.name}</td><td><img src="${pokemon.image}" alt="${pokemon.name}"></td></tr>`
                );
            });
        });
    });
    
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#pokemonTable tr").each(function() {
            $(this).toggle($(this).find("td:first").text().toLowerCase().includes(value));
        });
    });
});