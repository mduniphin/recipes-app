var restify = require('restify');
var mongoose = require('mongoose');
var server = restify.createServer();

const port = 8088;
const dbserver = 'mongodb://localhost/testing'

mongoose.connect(dbserver);
var db = mongoose.connection;

db.on('error', function(msg) {
  console.log('Mongoose bit the dust; ' + msg);
});

db.once('open', function() {
  console.log("Mongoose connection established.");
});

server.listen(port, function() {
  console.log('%s listening on port %s', server.name, port);
});
