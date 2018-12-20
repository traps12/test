var browserstack = require('browserstack-local');
const config = require('config'); 
var url = config.get("web.url");
let bs_local = new browserstack.Local();
var globalTunnel = require('global-tunnel-ng');
globalTunnel.initialize({
  host: 'internetpu',
  port: 8085,

});

exports.config = {
   specs: ["../spec/TodoSpec.js"],
   //seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  // webDriverProxy:'http://internetpu:8085',
   jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 1000000,
    },
    params: {
        env:url,
    },
    capabilities: {
        'browserstack.user': 'truptigarotkar1',
        'browserstack.key': 'FotasUZMqVHy848ZhqxE',
        'browserstack.local': true,
        'browserstack.debug': true,
        'browserName': 'firefox',
      },
      
 // Code to start browserstack local before start of test
 beforeLaunch: function(){
  console.log("Connecting local");
  return new Promise(function(resolve, reject){
    bs_local.start({'key': 'FotasUZMqVHy848ZhqxE','proxy-host': 'internetpu', 'proxy-port': '8085' }, function(error) {
    if (error) {
        console.log(error)
        return reject(error);}
        console.log('Connected. Now testing...');
        resolve();
    });
  });
},


 //Code to stop browserstack local after end of test
 afterLaunch: function(){
  return new Promise(function(resolve, reject){
   globalTunnel.end();
   bs_local.stop(resolve);
  });
}
}; 


  
