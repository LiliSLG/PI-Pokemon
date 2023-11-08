import { combineReducers } from 'redux';
import pokemon from "./pokemon";
import messageFooter from "./messageFooter";
import userLogin from "./userLogin";

export default combineReducers({
    pokemon,
    messageFooter, 
    userLogin
  });