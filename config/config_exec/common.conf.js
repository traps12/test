var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
process.env["NODE_CONFIG_DIR"] ="./config/config_env";
let config = require('config'); 
var url = config.get("web.url")

module.exports = {
    specs: [],
    jasmineNodeOpts: {
        showColors: true
    },
    params: {
        env:url,
    },
   framework: "jasmine2" ,
    onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: "target/screenshots"
          })
        );
     },
   
};