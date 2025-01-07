import React from "react";
import PokemonList from "./PokemonList";

const pokemons = [
  {
    name: "Pikachu",
    image: "/pikachu.png",
    type: "Electric",
  },
  {
    name: "Charmander",
    image: "/charmander.png",
    type: "Fire",
  },
  {
    name: "Bulbasaur",
    image: "/bulbasaur.png",
    type: "Grass",
  },
  {
    name: "Squirtle",
    image: "/squirtle.png",
    type: "Water",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Cartas Pokémon</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
