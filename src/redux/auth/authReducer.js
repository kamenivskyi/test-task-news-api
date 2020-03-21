import Types from './authTypes';

const initialState = {
  isLoggedIn: false
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_AUTH_STATUS_TRUE:
      return {
        ...state,
        isLoggedIn: true
      };
    case Types.SET_AUTH_STATUS_FALSE:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default newsReducer;
