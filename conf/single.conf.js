var browserstack = require('browserstack-local');
const config = require('config');
var url = config.get("web.url");
var globalTunnel = require('global-tunnel-ng');
globalTunnel.initialize({
  host: 'internetpu',
  port: 8085,

});

exports.config = {
   specs: ["../spec/TodoSpec.js"],
   seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
//    webDriverProxy:'http://internetpu:8085',
   jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 1000000,
    },
    params: {
        env:url,
    },
    capabilities: {
        'browserstack.user': 'truptigarotkar1',
        'browserstack.key': 'FotasUZMqVHy848Zhqx',
        'browserstack.debug': true,
        'browserName': 'Chrome',
      },

//Code to stop browserstack local after end of test
 afterLaunch: function(){
  return new Promise(function(resolve, reject){
   globalTunnel.end();
  });
}
};
