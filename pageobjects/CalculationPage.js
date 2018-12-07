var CalculationHelper = require("../helper/CalculationHelper.js");
var calculationHelper = new CalculationHelper();
module.exports = function() {
    var firstfield = element(by.model("first"));
    var secondfield =  element(by.model("second"));
    var button =  element(by.id("gobutton"));
    var totalsum = element(by.binding("latest"));

    this.setFirstField = function(name) {
     calculationHelper.sendData(firstfield, name);
     };
   
    this.setSecondField = function(name) {
      calculationHelper.sendData(secondfield, name);
      };

    this.buttonClick = function() {
        calculationHelper.clickButton(button);
       };
  
    this.gettotalsum = function() {
      return totalsum.getText();
    };
  };
