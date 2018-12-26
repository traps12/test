var url = browser.params.env;
var webdriver = require("selenium-webdriver");
var FirefoxProfile = require("firefox-profile");
var myProfile = new FirefoxProfile();

module.exports = function() {

  this.clickButton = function(locator) {
      locator.click();
    };

   this.sendData = function(locator, data) {
      locator.clear();
      locator.sendKeys(data);
      };

   this.addition = function(num1, num2) {
     return (num1 + num2).toString(); 
   };
};