var globalTunnel = require("global-tunnel-ng");
globalTunnel.initialize({
  host: "internetpu",
  port: 8085,
});
var globalConf = require("../common.conf.js");
globalConf.specs.push("../../../spec/TodoSpec.js");    
globalConf.capabilities= {"browserstack.user":"vishal538","browserstack.key":"NqQyPLgqydEAegmxE5uh","browserstack.debug":true,"browserName":"Chrome"},
globalConf.seleniumAddress = "http://hub-cloud.browserstack.com/wd/hub",
exports.config = globalConf;  

afterLaunch: function(){
        return new Promise(function(resolve, reject){
         globalTunnel.end();
        });
      }





