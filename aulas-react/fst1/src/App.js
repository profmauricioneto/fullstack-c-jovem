import React from "react";
import PokemonList from "./components/PokemonList";
import './App.css';

const pokemons = [
  {image: './assets/pikachu.png', name: 'pikachu', type: 'eletric'},
  {image: './assets/charmander.png', name: 'charmander', type: 'Fire'},
  {image: './assets/zorua.png', name: 'zorua', type: 'darkness'}
];

function App() {
    return (
        <div className="app">
            <h1>Pokemon Card List</h1>
            <PokemonList pokemons={pokemons} />
        </div>
    )
}

export default App;
