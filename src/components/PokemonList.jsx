import React from 'react';
import PokemonCard from "./PokemonCard";
import '../styles/PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.key}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  )
}

// create props default

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;