import React from "react";
import "./PokemonCard.css";

function PokemonCard({ name, image, type }) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h2 className="pokemon-name">{name}</h2>
      <p className="pokemon-type">Tipo: {type}</p>
    </div>
  );
}

export default PokemonCard;
