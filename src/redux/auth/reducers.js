import { state, types } from ".";

const reducers = (prevState = state, action) => {
  switch (action.type) {
    case types.SET_IS_SIGNING_IN:
      return {
        ...prevState,
        isSigningIn: action.payload.isSigningIn,
      };

    case types.SET_IS_SIGNING_UP:
      return {
        ...prevState,
        isSigningUp: action.payload.isSigningUp,
      };

    case types.SET_IS_AUTHENTICATED:
      return {
        ...prevState,
        isAuthenticated: action.payload.isAuthenticated,
      };

    case types.SET_USER:
      return {
        ...prevState,
        user: action.payload.user,
      };

    default:
      return prevState;
  }
};

export default reducers;
