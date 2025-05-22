const fs = require('fs');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        saveA11yReport(report) {
          fs.writeFileSync('a11y-report.json', JSON.stringify(report, null, 2));
          return null;
        }
      });
    }
  }
};
