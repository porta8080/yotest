process.env.DEBUG = 'swagger:middleware';

require('./config/helpers');
var config = require('./config');

var express = require('express');
var middleware = require('swagger-express-middleware');
var path = require('path');
var app = express();
var MemoryDataStore = middleware.MemoryDataStore;
var Resource = middleware.Resource;

middleware(path.join(__dirname, 'api/swagger/swagger.yaml'), app, function(err, middleware) {

  var myDB = new MemoryDataStore();
  myDB.save(
    new Resource('/hello_world/1234567890asdfghjkl', {_id: '1234567890asdfghjkl', created_at: new Date()}),
    new Resource('/hello_world/asdfghjkl1234567890', {_id: 'asdfghjkl1234567890', created_at: new Date()})
  );

  app.use(
    middleware.metadata(),
    middleware.CORS(),
    middleware.files(),
    middleware.parseRequest(),
    middleware.validateRequest()
  );

  //Cenário específico, mensagem de sucesso
  app.get('/hello_world/1234567890',function(req,res){
    res.status(200).json({mensagem: 'Sucesso'});
  });

  //Cenário específico, mensagem de erro
  app.get('/hello_world/0987654321',function(req,res){
    res.status(500).json({mensagem: 'Erro'});
  });

  app.use(middleware.mock(myDB));

  if(err) console.log('Aconteceu um erro: ',err);

  app.listen(config.mock.port, function() {
    console.log('Servidor mock rodando na porta: '+config.mock.port);
  });
});
