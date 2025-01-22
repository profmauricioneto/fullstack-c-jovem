import React, { Fragment } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css'

function PokemonList({ pokemons }) {
    return (
        <Fragment>
            <div className='list-pokemon'>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard 
                        key={index}
                        name={pokemon.name}
                        image={pokemon.image}
                        type={pokemon.type}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default PokemonList;