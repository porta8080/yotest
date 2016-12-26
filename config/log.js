var bunyan = require('bunyan');
var config = require('./config');

var log = bunyan.createLogger({
  name: 'back_backend',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      path: config.log.filename
    }
  ]
});

module.exports = log;
