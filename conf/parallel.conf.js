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
    'commonCapabilities': {
        'browserstack.user': 'truptigarotkar1',
        'browserstack.key': 'FotasUZMqVHy848ZhqxE'
      },
    
      'multiCapabilities': [{
        'browserName': 'Chrome'
      },{
        'browserName': 'Firefox'
      },{
        'browserName': 'IE'
      }]
    };
     
    exports.config.multiCapabilities.forEach(function(caps){
        for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
      });



  