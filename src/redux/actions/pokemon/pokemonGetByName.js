import axios from "axios";
import { URL_API } from "../../../constants";
import { actionTypes } from "../../action-types";
import {
  handleSetFooterAppStatus,  
} from "../../../handlers/handleFooterMessages";
import {
  savePokemonsNamesToLocalStorage,
  loadPokemonsNamesFromLocalStorage,
} from "../../../utils/localStorage";

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      handleSetFooterAppStatus(dispatch, "LOADING POKEMON " + name, 2);
      const pokemon = await axios(`${URL_API}/?name=${name}`);
      dispatch({
        type: actionTypes.GET_POKEMON_BY_NAME,
        payload: pokemon.data,
      });
      //no se como actualizar la cantidad de pokes de la bd
      // handleUpdateFooterMessage(dispatch, "DB_P", pokemon.data.totalPokemonsDB, 1, true);
      handleSetFooterAppStatus(dispatch, "POKEMON " + name + " LOADED", 1);
    } catch (error) {
      handleSetFooterAppStatus(dispatch, "ERROR LOADING POKEMON " + name, 3);
      alert(`${name} was not found in Pokemons.` + error.message);
    }
  };
};

export const getPokemonByNames = (names) => {
  return async (dispatch) => {
    const arrayParam = names.join(",");
    try {
      handleSetFooterAppStatus(dispatch, "LOADING POKEMONS BY NAME", 2);
      const pokemon = await axios(`${URL_API}/names?namesArray=${arrayParam}`);
      dispatch({
        type: actionTypes.GET_POKEMON_BY_NAME,
        payload: pokemon.data.pokemons,
      });
      handleSetFooterAppStatus(
        dispatch,
        "-->" + pokemon.data.pokemons.length + " POKEMON LOADED",
        1
      );
    } catch (error) {
      handleSetFooterAppStatus(dispatch, "ERROR LOADING POKEMON BY NAMES", 3);
      // alert(`Pokemons.` + error.message);
    }
  };
};

export const getPokemonByNamesHELP = () => {
  return async (dispatch) => {
    try {
      handleSetFooterAppStatus(dispatch, "LOADING POKEMONS NAMES FOR HELP", 2);
      const storedNamesData = loadPokemonsNamesFromLocalStorage();
      if (storedNamesData) {//busco en localstorage
        dispatch({
          type: actionTypes.GET_POKEMON_NAMES_HELP,
          payload: storedNamesData,
        });
      } else {//busco en la bdd
        const pokemonNames = await axios(`${URL_API}/names`);
        dispatch({
          type: actionTypes.GET_POKEMON_NAMES_HELP,
          payload: pokemonNames.data,
        });
        savePokemonsNamesToLocalStorage(pokemonNames.data);
      }
      handleSetFooterAppStatus(dispatch, "--> POKEMON NAMES LOADED", 1);
    } catch (error) {
      handleSetFooterAppStatus(dispatch, "ERROR LOADING POKEMON NAMES", 3);
      // alert(`Pokemons.` + error.message);
    }
  };
};
