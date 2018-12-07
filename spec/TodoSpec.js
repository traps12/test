const CalculationPage = require("../pageobjects/CalculationPage.js");
const CalculationHelper = require("../helper/CalculationHelper.js");
let number1 = 4;
let number2 = 5;

var calculationPage = new CalculationPage();
var calculationHelper = new CalculationHelper();

describe("Calculation Addition Page", function() {
    it("should able to add two valid number", function() {
      calculationHelper.get();
      calculationPage.setFirstField(number1);
      calculationPage.setSecondField(number2);
      calculationPage.buttonClick();
      expect(calculationPage.gettotalsum()).toEqual(calculationHelper.addition(number1, number2));
    });

    it("should not able to add two invalid number", function() {
      calculationPage.setFirstField('d');
      calculationPage.setSecondField('f');
      calculationPage.buttonClick();
      expect(calculationPage.gettotalsum()).toEqual('NaN');
    });
});
