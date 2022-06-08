import { creators } from ".";
import { logger } from "../../../common/logger";
import { signin, signup } from "../../../services/api/auth";
import { message, notification } from "antd";
import { cache } from "../../../services/cache";
import Router from "next/router";
import { routes } from "../../utils/routes";

const actions = {
  setIsAuthenticated: (isAuthenticated) => (dispatch) => {
    dispatch(creators.setIsAuthenticated(isAuthenticated));
  },

  setUser: (user) => (dispatch) => {
    dispatch(creators.setUser(user));
  },

  handleSignIn: (values) => async (dispatch) => {
    dispatch(creators.setIsSigningIn(true));
    try {
      let res;
      const { username, password } = values;
      res = await signin({ email: username, password });
      message.config({ maxCount: 2 });
      if (res.data.success) {
        dispatch(creators.setIsAuthenticated(true));
        dispatch(creators.setUser(res.data.payload.user));
        Router.push(routes.HOME);
        notification.success({
          message: `Welcome back, ${res.data.payload?.user?.name}`,
        });
        cache.setItem({ user: res.data.payload.user });
      } else if (res.data.status === 401) {
        message.error(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      logger.err(error, "handleSignIn()");
    } finally {
      dispatch(creators.setIsSigningIn(false));
    }
  },

  handleSignUp: (values) => async (dispatch) => {
    dispatch(creators.setIsSigningUp(true));
    try {
      let res;
      const { name, username, password } = values;
      res = await signup({ email: username, password, name });
      message.config({ maxCount: 2 });
      if (res.data.success) {
        Router.push(routes.VERIFY_EMAIL);
      } else if (res.data.status === 401) {
        message.error(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      logger.err(error, "handleSignUp()");
    } finally {
      dispatch(creators.setIsSigningUp(false));
    }
  },

  handleSignOut: () => (dispatch) => {
    cache.removeItem("user");
    dispatch(creators.setIsAuthenticated(false));
    dispatch(creators.setUser(null));
  },
};

export default actions;
