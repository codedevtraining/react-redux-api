import getConfig from './config';

const config = getConfig({
  development: {
    bypass: true,
    secret: "realponto"
  },

  test: {
      bypass: true,
      secret: "realponto"
  },

  production: {
      bypass: false,
      secret: "realponto"
  }
});