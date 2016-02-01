var webdriver = require('selenium-webdriver');
var main = {
  pageHeading: element(webdriver.By.id('title')),
  get: function() {
    browser.get('index')
  }
}
