const { defineConfig } = require("cypress");
const cucumber = require ('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/DataHub/testCases/BDD/*.feature',
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 10000
  },
});
