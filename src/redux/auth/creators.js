import { types } from ".";

const creators = {
  setIsSigningIn: (isSigningIn) => ({
    type: types.SET_IS_SIGNING_IN,
    payload: { isSigningIn },
  }),

  setIsSigningUp: (isSigningUp) => ({
    type: types.SET_IS_SIGNING_UP,
    payload: { isSigningUp },
  }),

  setIsAuthenticated: (isAuthenticated) => ({
    type: types.SET_IS_AUTHENTICATED,
    payload: { isAuthenticated },
  }),

  setUser: (user) => ({
    type: types.SET_USER,
    payload: { user },
  }),
};

export default creators;
