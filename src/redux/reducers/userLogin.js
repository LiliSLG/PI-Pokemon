import { actionTypes } from "../action-types";

const initialState = {
    isLoggedIn: false,
    user: null,
    loading: false,
  };

  const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case  actionTypes.LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
          loading: false,
        };
  
      case actionTypes.LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
        };
  
      case  actionTypes.LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
  
        default:
        return state;
    }
  };

  export default userLoginReducer;