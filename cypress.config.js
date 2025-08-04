const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.API_URL = process.env.API_URL;
      config.env.API_AUTHORIZATION = process.env.API_AUTHORIZATION;
      config.env.LOGIN_URL = process.env.LOGIN_URL;
      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
