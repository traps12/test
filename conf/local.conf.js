var browserstack = require('browserstack-local');

const config = require('config'); 
var url = config.get("web.url")

exports.config = {
    specs: ["../spec/TodoSpec.js"],
    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    params: {
        env:url,
    },
    capabilities: {
        'browserstack.user': 'truptigarotkar1',
        'browserstack.key': 'FotasUZMqVHy848ZhqxE',
        'browserstack.local': true,
        'browserName': 'chrome'
      },
     
beforeLaunch: function(){
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');
        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
    exports.bs_local.stop(resolve);
    });
  }
}; 




  