var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const config = require('config'); 
var url = config.get("web.url")

exports.config = {
    specs: ["spec/TodoSpec.js"],
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    params: {
        env:url
    },
  multiCapabilities: [ {
    'browserName': 'internet explorer'
}],
localSeleniumStandaloneOpts : {
    jvmArgs : ["-Dwebdriver.ie.driver=./IEDriverServer3.141.0.exe"] // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe"
  },
    framework: "jasmine2" ,
    onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: "target/screenshots"
          })
        );
     }
  };