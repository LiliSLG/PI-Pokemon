//pokemons post
import { createPokemon } from "./pokemon/pokemonPost";
//pokemons post API-BDD
import { pokemonSaveToBdd } from "./pokemon/pokemonSaveToBdd";
//pokemons put
import { updatePokemon } from "./pokemon/pokemonUpdate";
//pokemons delete
import { pokemonDelete } from "./pokemon/pokemonDelete";
//cierre de card
import { pokemonClose } from "./pokemon/pokemonClose";
//clear detail
import { pokemonClear } from "./pokemon/pokemonClear";
//pokemons get
import {
  getPokemons,
  getPokemonById,
  getPokemonsFromLocalStore,
  getPokemonsFromAPI,
} from "./pokemon/pokemonGet";

import {
  getPokemonByName,
  getPokemonByNames,
  getPokemonByNamesHELP,
} from "./pokemon/pokemonGetByName";
//filtros
import {
  pokemonApplyFilters,
  pokemonApplyMultipleFilters,
  resetFilters,
} from "./pokemon/pokemonFilter.js";

import { pokemonSort } from "./pokemon/pokemonSort";

//types
import { getTypes, getTypesFromLocalStore } from "./types";

//user
import { registerUser, loginUser } from "./user.js";

//footer messages
import {
  setAppStatus,
  updateAppStatus,
  addMessage,
  deleteMessage,
  updateMessage,
} from "./messageFooter";

export {
  pokemonClear,
  pokemonClose,
  pokemonSaveToBdd,
  createPokemon,
  updatePokemon,
  pokemonDelete,
  getPokemons,
  getPokemonById,
  getPokemonByName,
  getPokemonByNames,
  getPokemonByNamesHELP,
  getPokemonsFromAPI,
  pokemonSort,
  pokemonApplyFilters,
  pokemonApplyMultipleFilters,
  resetFilters,
  getTypes,
  setAppStatus,
  updateAppStatus,
  addMessage,
  deleteMessage,
  updateMessage,
  getTypesFromLocalStore,
  getPokemonsFromLocalStore,
  registerUser,
  loginUser,
};
