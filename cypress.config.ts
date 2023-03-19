import { defineConfig } from "cypress";
import * as fs from "fs-extra";

export default defineConfig({
  pageLoadTimeout: 10000,
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/reports/screenshots",
  video: false,
  videosFolder: "cypress/videos",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    reportFilename: "mocha-result",
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
    setupNodeEvents,
  },
});

async function setupNodeEvents(on, config) {
  await on("before:run", () => {
    fs.emptyDirSync("./cypress/reports");
    fs.emptyDirSync("./cypress/downloads");
  });
  //This will clear all contents in "./cypress/reports" && "./cypress/reports" before the test run.
}
