var browserstack = require('browserstack-local');
process.env["NODE_CONFIG_DIR"] ="./config/config_env";
let config = require('config');
var url = config.get("web.url");
let bs_local = new browserstack.Local();
credential = require("../../credentials.js")

exports.config = {
   specs: ["../../../spec/TodoSpec.js"],
   jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: credential.timeout,
    },
    params: {
        env:url,
    },
    capabilities: {
      'browserstack.user': credential.browserstack.username,
      'browserstack.key': credential.browserstack.key,
      'browserstack.local': true,
      'browserstack.debug': true,
      'browserName': 'chrome',
      },
      
beforeLaunch: function(){
  console.log("Connecting local");
  return new Promise(function(resolve, reject){
   credential.proxy.flag ? bs_local_args = {'key': exports.config.capabilities['browserstack.key'],'proxy-host': credential.proxy.host, 'proxy-port': credential.proxy.port }:bs_local_args = {'key': exports.config.capabilities['browserstack.key']}
    bs_local.start(bs_local_args, function(error) {
    if (error) {
        console.log(error)
        return reject(error);}
        console.log('Connected. Now testing...');
        resolve();
    });
  });
},

 afterLaunch: function(){
  return new Promise(function(resolve, reject){
   bs_local.stop(resolve);
  });
}
}; 


  
