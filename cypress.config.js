const { defineConfig } = require("cypress");
const cucumber = require ('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/DataHub/testCases/BDD/*.feature',
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 10000,
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    baseUrl: 'https://datahub-stage.skycatch.com/organization/tzAeNpK6sFCVf7Sqk4XTj9/site/j7xCbbYaqAvnLD7hbg3G2u/dataset/9e285ed5-caa1-42fc-a8e9-cda4b1620a40'
  },
});
