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

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 1000000
    },
    params: {
        env:url,
    },
    'commonCapabilities': {
      'browserstack.user': 'vishal538',
      'browserstack.key': 'NqQyPLgqydEAegmxE5uh',
      },

      'multiCapabilities': [{
        'browserName': 'Chrome'
      },{
        'browserName': 'Firefox'
      },{
        'browserName': 'IE'
      }],

      afterLaunch: function(){
       return new Promise(function(resolve, reject){
        globalTunnel.end();
       });
     }
    };

    exports.config.multiCapabilities.forEach(function(caps){
        for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
      });
