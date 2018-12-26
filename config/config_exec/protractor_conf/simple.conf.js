var commomConf = require("../common.conf.js");
commomConf.specs.push("../../../spec/TodoSpec.js");    
commomConf.multiCapabilities= [{"browserName":(process.env.TEST_BROWSER_NAME || "chrome")}],
exports.config = commomConf;  