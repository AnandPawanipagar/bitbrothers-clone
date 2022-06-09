export const routes = {
  HOME: "/",

  SIGNIN: "/auth/signin",
  SIGNUP: "/auth/signup",
  VERIFY_EMAIL: "/auth/verify-email",
  // NAVIGATION_HOME:"/home"
};

export const privateRoutes = [routes.NAVIGATION_HOME];

export const authRoutes = [routes.SIGNIN, routes.SIGNUP];
