import {
  createSlice,
  createAsyncThunk
}
from "@reduxjs/toolkit";
import {
  getPokemonFirstGeneration,
  getPokemonDetails
} from "../api/pokeapi";

import {
  setLoading
} from "./uiSlice";


const initialState = {
  pokemons: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonWithDetails',
  async (_, {
    dispatch
  }) => {
    dispatch(setLoading(true));
    const resultListPokemon = await getPokemonFirstGeneration();
    const pokemonsDetailed = await Promise.all(resultListPokemon.map(pokemon => getPokemonDetails(pokemon)));

    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const {
  setFavorite,
  setPokemons
} = dataSlice.actions

console.log('dataSlice:', dataSlice.actions);

export default dataSlice.reducer;