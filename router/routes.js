var express = require('express');

var api = express.Router();

api.get('/users', function(req, res) {
  res.send(`in users and ${req.method} method`);
});

api.post('/user', function(req, res) {
  console.log('route /user body', req.body);
  res.send(`in users and ${req.method} method`);
});

api.get('/messages', function(req, res) {
  res.send(`in message and ${req.method} method`);
});

api.post('/message', function(req, res) {
  console.log('route /message body', req.body);
  res.send(`in message and ${req.method} method`);
});

module.exports = api;
