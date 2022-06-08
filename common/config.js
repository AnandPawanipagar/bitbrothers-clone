const ENV = process.env.NODE_ENV;

const local = {
  API_URL: `https://startupmumbai-api.herokuapp.com/v1/`,
  APP_URL: `http://localhost:3000`,
};

const development = {
  ...local,
  API_URL: `https://startupmumbai-api.herokuapp.com/v1/`,
  APP_URL: ``,
};

const production = {
  ...development,
  API_URL: `https://startupmumbai-api.herokuapp.com/v1/`,
  APP_URL: ``,
};

const configs = { local, development, production };

export const config = configs[ENV];
