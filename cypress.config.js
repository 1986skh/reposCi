const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kn4kuu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
