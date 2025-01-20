import React, { Fragment } from 'react';
import './PokemonCard.css'

function PokemonCard({name, image, type}) {
    return(
        <Fragment>
            <div className='card-pokemon'>
                <img src={image} alt="image-pokemon" className='pokemon-image' />
                <h2 className='name-pokemon'>{name}</h2>
                <p className='type-pokemon'>Type: {type}</p>
            </div>
        </Fragment>
    );
}

export default PokemonCard;