var mongoose = require('../../config/db');

var schema = new mongoose.Schema({
  created_at: Date
},{collection: 'hello_world'});

// Import Model methods to mongoose records
schema.methods = {
  sayHello: function(){
    return "Hello, I'm "+this._id;
  }
};

module.exports = mongoose.model('HelloWorld', schema);
