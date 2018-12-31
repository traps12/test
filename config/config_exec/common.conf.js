var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
process.env["NODE_CONFIG_DIR"] ="./config/config_env";
let config = require('config'); 
var url = config.get("web.url")
var HtmlReporter = require('protractor-beautiful-reporter');


module.exports = {
    specs: [],
    jasmineNodeOpts: {
        showColors: true
    },
    params: {
        env:url,
    },
   framework: "jasmine2" ,
    // onPrepare: function() {
    //     jasmine.getEnv().addReporter(
    //       new Jasmine2HtmlReporter({
    //         savePath: "target/screenshots"
    //       })
    //     );
    //  },
     onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
     }
   
};