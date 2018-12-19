var url = browser.params.env;
var webdriver = require("selenium-webdriver");
var FirefoxProfile = require("firefox-profile");
var myProfile = new FirefoxProfile();

module.exports = function() {

   this.get = function() {
    browser.get("http://M1036232:Nov@2018@juliemr.github.io/protractor-demo/");
   //  var capabilities = webdriver.Capabilities.firefox();
   //  myProfile.setPreference("browser.newtab.url", "http://juliemr.github.io/protractor-demo/");
   //  myProfile.encoded(function(err, encodedProfile) {
   //          capabilities.set("firefox_profile", encodedProfile);
   //  var wd = new webdriver.Builder().
   //                    withCapabilities(capabilities).
   //                    build();
            
   //  wd.get("http://juliemr.github.io/protractor-demo/");  });
    };

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