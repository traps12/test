process.env["NODE_CONFIG_DIR"] ="./config/config_env";
let config = require('config');
var url = config.get("web.url");
credential = require("../credentials.js")
var globalTunnel = require('global-tunnel-ng');
globalTunnel.initialize({
  host: credential.proxy.host,
  port: credential.proxy.port,
});

exports.config = {
   specs: ["../../../spec/TodoSpec.js"],
   seleniumAddress: credential.browserstack.cloudAddress,

   jasmineNodeOpts: {
        defaultTimeoutInterval: 1000000,
    },
    params: {
        env:url,
    },
    capabilities: {
        'browserstack.user': credential.browserstack.username,
        'browserstack.key': credential.browserstack.key,
        'browserstack.debug': true,
        'browserName': 'Chrome',
      },

afterLaunch: function(){
  return new Promise(function(resolve, reject){
     globalTunnel.end();
  });
}
};