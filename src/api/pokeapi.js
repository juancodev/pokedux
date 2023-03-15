import axios from "axios";

const API =
  import.meta.env.VITE_APP_API;

const VERSION =
  import.meta.env.VITE_APP_VERSION;

const endPoint = {
  pokemon: {
    getPokemon: `${API}${VERSION}/pokemon?limit=151`,
  }
};

export const getPokemonFirstGeneration = () => {
  return axios.get(endPoint.pokemon.getPokemon)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
};

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
    .then(response => response.data)
    .catch((error) => console.log(error));
}