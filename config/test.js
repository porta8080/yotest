require('./helpers');

Helper.forEachModuleFileType('test',function(entry,file_name){
  require(file_name);
});
