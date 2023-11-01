import { actionTypes } from "../../action-types";
import { handleSetFooterAppStatus } from "../../../handlers/handleFooterMessages";

export const pokemonSort = (sort, value, pokemons) => (dispatch) => {
  try {
    handleSetFooterAppStatus(dispatch, `SORTING BY ${sort}: ${value}`, 2);
    dispatch({
      type: actionTypes.SORT_POKEMONS,
      payload: pokemons,
    });
    handleSetFooterAppStatus(dispatch, `SORTED BY ${sort}: ${value}`, 1);
    return Promise.resolve();
  } catch (error) {
    handleSetFooterAppStatus(
      dispatch,
      `ERROR SORTING BY ${sort}:${value}`,
      3
    );
    alert("Error sorting Pokemons.", error.message);
    return Promise.reject();
  }
};

