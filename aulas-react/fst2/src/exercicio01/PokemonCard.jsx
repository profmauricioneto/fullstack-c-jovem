import React from 'react';
import './PokemonCard.css';

function PokemonCard({ name, image, type }) {
    return (
        <div className='card-pokemon'>
            <img src={image} alt={name} className='image-pokemon'  />
            <h2 className='name-pokemon'>{name}</h2>
            <p>Type: {type}</p>
        </div>
    );
}

export default PokemonCard;