import axios from "axios";
import { URL_API } from "../../../constants";
import { actionTypes } from "../../action-types";
import {
  handleSetFooterAppStatus,
  handleUpdateFooterMessage, 
} from "../../../handlers/handleFooterMessages";

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


  