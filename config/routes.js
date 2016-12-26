var express = require('express');
var router = express.Router();

Helper.forEachModuleFileType('routes',function(entry,file_name){
  router.use('/'+entry,require(file_name));
});

router.use('/doc', express.static(__dirname + '/../doc'));

router.use(function(req,res,next){
  // Route not found
  if(!('not_found' in req.session)) req.session.not_found = 0;
  req.session.not_found++;

  var err = new Error('Not found: '+req.session.not_found);
  err.status = '404';
  next(err);
});

module.exports = router;
