var express = require('express');
var router = express.Router();

var middlewares = require('./middlewares');
var controller = require('./controller');

/**
* @apiVersion 1.0.0
* @apiGroup HelloWorld
* @apiDescription Rota padrão do Hello World
* @api {get} /hello_world Lista todos os registros de Hello World
* @apiName Index
* @apiExample {curl} Example usage:
*     curl -i http://localhost:8090/hello_world/
* @apiParams a
* @apiSuccess (Success 200) {[Object]} Response Objeto JSON com todos os registros da collection Hello World.
* @apiSuccessExample {json} Sucesso 200
*   [
*   { _id: ObjectId, created_at: Date }
*   ]
*/

router.get('/',controller.index.bind(controller));

module.exports = router;
