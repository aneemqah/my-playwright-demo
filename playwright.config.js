const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  use: {
    // Slow down all actions by 3000ms (3 seconds) for visibility
    slowMo: 3000,
  },
});
