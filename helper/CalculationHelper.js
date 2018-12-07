var url = browser.params.env;

module.exports = function() {

   this.get = function() {
     browser.get(url);
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