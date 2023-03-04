import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 10000,

  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshots",
  video: false,
  videosFolder: "cypress/videos",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Juye-report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    embededScreenshots: true,
    overwrite: false,
    html: false,
    json: true,
  },
  env: {
    baseURL: "https://opensource-demo.orangehrmlive.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
