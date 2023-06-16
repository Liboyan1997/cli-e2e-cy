
const { defineConfig } = require('cypress')

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    projectId: "nfyk6c",
    watchForFileChanges: true,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "tests/e2e/reports",
        overwrite: false,
        html: true,
        json: false,
        toConsole: true
    },
    e2e: {
        specPattern: 'tests/e2e/specs/**/*.{js,jsx,ts,tsx}',
        supportFile: 'tests/e2e/support/index.js',
        testIsolation: false,
    },
})