const prompt = require('prompt-sync')();

let pokemon = prompt('Pokemon name: ');
// Codigo para captar os dados de pokemons passado por argumento
async function getPokemonData(pokemon) {
    let pokemonData;
    try {
        pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    } catch (err) {
        console.log(`An wild error occurs: ${err}`);
    }

    let objectPokemon = await pokemonData.json();
    return objectPokemon;
}

getPokemonData(pokemon)
    .then((pokemon) => {
        console.log(pokemon);
    })
    .catch((err) => {
        console.error(err);
    });