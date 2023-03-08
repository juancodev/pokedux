import React, { useState } from 'react';
import PokemonCard from "./PokemonCard";
import '../styles/PokemonList.css';

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard name={pokemon.name} key={pokemon.key} />;
      })}
    </div>
  )
}

// create props default

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;