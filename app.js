process.on('uncaughtException', function(err){
  //log
  console.log(err);
});

var express = require('express');
var body_parser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
var cors = require('cors');
var session = require('express-session');
// var redis = require('redis');
// var RedisStore = require('connect-redis')(session);
// var client  = redis.createClient();

require('./config/helpers');
var config = require('./config');
var db = require('./config/db');

var app = express();
var session_config = { secret: 'digital-backend', saveUninitialized: true, resave: false, cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }};
// var session_config = {
//   store: new RedisStore({
//     host: 'localhost',
//     port: 6379,
//     client: client,
//     ttl :  260}),
//   secret: '',
//   saveUninitialized: true,
//   resave: false,
//   cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
// };

app.use(helmet());
app.use(cors());
app.use(body_parser.urlencoded({limit: '2mb', extended: false}));
app.use(body_parser.json({limit: '2mb'}));
app.use(compression());
app.use(session(session_config));

require('./config/middlewares')(app);

app.use('/',require('./config/routes'));

app.use(function(err,req,res,next){
  if(!('error' in req.session)) req.session.error=0;
  req.session.error++;

  res.status(err.status || 500).json(err.message);
});

module.exports = app.listen(config.port,function(){
  console.log('Server listening to port '+config.port);
});
