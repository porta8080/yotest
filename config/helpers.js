var fs = require('fs');

var Helper = {};

Helper.rootPath = function(){
  return __dirname+'/../';
};

Helper.configPath = function(){
  return __dirname;
};

Helper.config = function(){
  return require(Helper.configPath());
};

Helper.forEachModuleFileType = function(file_type,cb){
  var config = Helper.config();
  var path = config.path.modules, current_path, file_name;
  fs.readdirSync(path).filter(function(entry){
    //para cada pasta interna a modules
    current_path = [path,entry].join('/');
    if(fs.statSync(current_path).isDirectory()){
      file_name = [current_path,file_type+'.js'].join('/');
      if(fs.existsSync(file_name)){
        cb(entry,file_name);
      }
    }
  });
};

global.Helper = Helper;
