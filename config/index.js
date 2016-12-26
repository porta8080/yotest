var fs = require('fs');

var config = {
  path:{
    root: Helper.rootPath(),
    log: Helper.rootPath()+'/error.log',
    modules: Helper.rootPath()+'/modules'
  }
};

var environment = process.env.NODE_ENV || 'development';
var path = config.path.root+'/config/env/'+environment;
if (!fs.existsSync(path)){
  var env_config = require(path);
  if(typeof env_config === 'object') config = Object.assign(config,env_config);
}

module.exports = config;
