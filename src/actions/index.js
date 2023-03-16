import {
  getPokemonDetails
} from "../api/pokeapi";

import {
  SET_LOADING,
  SET_POKEMONS
} from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));

    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  };