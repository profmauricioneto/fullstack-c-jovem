import React from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css'

function PokemonList({ pokemons }) {
    return (
        <div className='list-pokemon'>
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={index} name={pokemon.name}
                image={pokemon.image} type={pokemon.type}
                />
            ))}
        </div>
    );
}

export default PokemonList;