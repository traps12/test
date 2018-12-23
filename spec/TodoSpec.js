const CalculationPage = require("../pageobjects/CalculationPage.js");
const CalculationHelper = require("../helper/CalculationHelper.js");

var calculationPage = new CalculationPage();
var calculationHelper = new CalculationHelper();

describe("Calculation Addition Page", function() {

    beforeEach(function() {
      calculationHelper.get();
    });

    it("should able to add two valid number", function() {
      calculationPage.setFirstField(1);
      calculationPage.setSecondField(5);
      calculationPage.buttonClick();
      expect(calculationPage.gettotalsum()).toEqual(calculationHelper.addition(1, 5));
    });

    it("should not able to add two invalid number", function() {
      calculationPage.setFirstField('d');
      calculationPage.setSecondField('f');
      calculationPage.buttonClick();
      expect(calculationPage.gettotalsum()).toEqual('NaN');
    });
});
