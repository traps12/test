var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const config = require('config');
var url = config.get("web.url")

exports.config = {
    chromeDriver: '/usr/bin/chromedriver',
    specs: ["../spec/TodoSpec.js"],
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    params: {
        env:url,
    },
    multiCapabilities: [{
        'browserName':(process.env.TEST_BROWSER_NAME || 'chrome'),
        chromeOptions: {
            args: [ 'no-sandbox', '--headless', '--disable-gpu', '--window-size=800,600' ]
        }
      }],
   framework: "jasmine2" ,
    onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: "target/screenshots"
          })
        );
     }
  };
