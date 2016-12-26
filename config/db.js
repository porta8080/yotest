var mongoose = require('mongoose');
var config = require('./');

function __connection(){
  var auth = config.username ? `${config.db.username}:${config.db.password}@` : '';
  return `mongodb://${auth}${config.db.host}:${config.db.port}/${config.db.name}`;
}

mongoose.connect(__connection());

var db = mongoose.connection;

db.on('error',function(err){
  console.log('DB error: ',err);
});

module.exports = mongoose;
