var webdriver = require('selenium-webdriver');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['objects.js', 'toDoListFeature.js'],
  Capabilities:  {
    browserName: 'chrome'
  },
};
