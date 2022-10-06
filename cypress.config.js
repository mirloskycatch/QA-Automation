const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration',///examples/*.js'
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,
    failOnStatusCode: false,
    experimentalSessionAndOrigin: true

  },
});
