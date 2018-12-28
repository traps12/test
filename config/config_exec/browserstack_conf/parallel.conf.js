process.env["NODE_CONFIG_DIR"] ="./config/config_env";
let config = require('config');
var url = config.get("web.url");
var globalTunnel = require('global-tunnel-ng');
credential = require("../../credentials.js")

if (credential.proxy.flag){
globalTunnel.initialize({
  host: credential.proxy.host,
  port: credential.proxy.port,
});
}

exports.config = {
    specs: ["../../../spec/TodoSpec.js"],
    seleniumAddress: credential.browserstack.cloudAddress,
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: credential.timeout,
    },
    params: {
        env:url,
    },
    'commonCapabilities': {
      'browserstack.user': credential.browserstack.username,
      'browserstack.key':  credential.browserstack.key,
      },

      'multiCapabilities': [{
        'browserName': 'Chrome'
      },{
        'browserName': 'Firefox'
      },{
        'browserName': 'IE'
      }],

      afterLaunch: function(){
        if (credential.proxy.flag){
        return new Promise(function(resolve, reject){
           globalTunnel.end();
        });
      }
    }
  };

exports.config.multiCapabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
