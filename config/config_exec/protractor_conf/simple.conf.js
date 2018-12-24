var globalConf = require("../common.conf.js");
globalConf.specs.push("../../../spec/TodoSpec.js");    
globalConf.multiCapabilities= [{"browserName":("chrome")}],
exports.config = globalConf;  