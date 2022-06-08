import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { reducers as authReducer, actions as authActions } from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const actions = {
  authActions,
};

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
