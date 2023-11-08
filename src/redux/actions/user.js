import axios from "axios";
import { URL_API } from "../../constants";
import { actionTypes } from "../action-types";
import { setToken } from "../../utils/tokenUtils";

export const loginUser = (user) => {
  const { email, password } = user;
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOGIN_REQUEST });
      const endpoint = `${URL_API}/user/login/?email=${email}&password=${password}`;
      const response = await axios(endpoint);
      const { token } = response.data;
      if (token) {
        setToken(token);
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: email,
        });
      }
    } catch (error) {
      window.alert(error.message);
      dispatch({ type: actionTypes.LOGIN_FAILURE });
    }
  };
};

export const registerUser = (user) => {
  const { fullName, email, password } = user;
  const endpoint = `${URL_API}/user/register/?fullName=${fullName}&email=${email}&password=${password}`;
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOGIN_REQUEST });
      const data = {
        newUser: { fullName, email, password },
      };
      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: email,
        });
        window.alert("Usuario creado");
      }
    } catch (error) {
      dispatch({ type: actionTypes.LOGIN_FAILURE });
      window.alert(error.message);
    }
  };
};

//   export const logoutUser = () => {
//     return { type: LOGOUT };
//   };
