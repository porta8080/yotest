module.exports = function(app){
  app.use(function(req,res,next){
    console.log(new Date());
    next();
  });
};
