const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin.default(config)], }));

  return config;
}

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 7000,
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
    baseUrl: 'https://comercial-pre.central.inditex.grp/rmumspa',
    env:{ 
      openamurl: "https://auth-pre.inditex.com/openam/json/realms/root/realms/itxid/authenticate?authIndexType=service&authIndexValue=ldapService",
      openamdomain: "axpregfam01lb.central.inditex.grp",
      db: {
        host: "AXPRECMMYS041",
        port: 3306,
        database: "RAWMAT_UNLOAD_MGMT",
        user: "urmumwsc",
        password: process.env["CYBERARK_CREDENTIALS_PRE_DB_PASSWORD"]
      }
    }
  },
});