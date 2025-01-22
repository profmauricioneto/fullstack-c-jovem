import React from 'react';
import PokemonList from '../exercicio01/PokemonList';
import './App.css';

const pokemons = [
  {name: 'pikachu', image: './assets/pikachu.png', type: 'eletric'},
  {name: 'togepi', image: './assets/togepi.png', type: 'fairy'},
  {name: 'totodile', image: './assets/totodile.png', type: 'water'},
  {name: 'zubat', image: './assets/zubat.png', type: 'poison'},
  {name: 'cinderace', image: './assets/cinderace.png', type: 'fire'},
];

function App() {
    return (
        <div className='app'>
            <h2>Pokemon Card</h2>
            <PokemonList pokemons={pokemons} />
        </div>
    );
}

export default App;