export const routes = {
  HOME: "/",

  SIGNIN: "/auth/signin",
  SIGNUP: "/auth/signup",
  VERIFY_EMAIL: "/auth/verify-email",
};

export const privateRoutes = [routes.HOME];

export const authRoutes = [routes.SIGNIN, routes.SIGNUP];
