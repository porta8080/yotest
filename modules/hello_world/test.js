var request = require('supertest');
var mocha = require('mocha');

var app = require('../../app');

describe('GET /hello_world', function() {
  it('respond with json', function(done) {
    request(app)
    .get('/hello_world')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});
