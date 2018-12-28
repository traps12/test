process.env["NODE_CONFIG_DIR"] ="./config/config_env";
let config = require('config');
var url = config.get("web.url");
credential = require("../../credentials.js")
var globalTunnel = require('global-tunnel-ng');

if (credential.proxy.flag){
globalTunnel.initialize({
  host: credential.proxy.host,
  port: credential.proxy.port,
  seleniumAddress: credential.browserstack.cloudAddress,
});
}

exports.config = {
  params: {
    env:url
    },
   specs: ["../../../spec/TodoSpec.js"],
   seleniumAddress: credential.browserstack.cloudAddress,
   jasmineNodeOpts: {
        defaultTimeoutInterval: credential.timeout,
    },
    capabilities: {
        'browserstack.user': credential.browserstack.username,
        'browserstack.key': credential.browserstack.key,
        'browserstack.debug': true,
        'browserName': 'Chrome',
      },

afterLaunch: function(){
  if (credential.proxy.flag){
  return new Promise(function(resolve, reject){
     globalTunnel.end();
  });
}
}
};