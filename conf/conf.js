var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const config = require('config');
var url = config.get("web.url")

exports.config = {
    // specs: ["../spec/TodoSpec.js"],
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 400000,
        isVerbose: true,
        includeStackTrace: true
    },
    params: {
        env:url,
    },
    // multiCapabilities: [{
    //     'browserName':(process.env.TEST_BROWSER_NAME || 'chrome'),
    //     // chromeOptions: {
    //     //     args: [ 'no-sandbox', '--headless', '--disable-gpu', '--window-size=800,600' ]
    //     // }
    //   }],

    'multiCapabilities': [{
        shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        'browserName':(process.env.TEST_BROWSER_NAME || 'chrome'),
        chromeOptions: {
            args: [ '--headless', '--disable-gpu', '--window-size=800,600' ]
        },
        specs: ["../spec/TodoSpec.js"]
      },{
        shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        'browserName':(process.env.TEST_BROWSER_NAME || 'chrome'),
        chromeOptions: {
            args: [ '--headless', '--disable-gpu', '--window-size=800,600' ]
        },
        specs: ["../spec/TodoSpec02.js"]
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
