var restify = require('restify');
var mongoose = require('mongoose');
var config = require('./config.json');
var server = restify.createServer();

const port = 8088;
const dbserver = config.dburl;
console.log(dbserver);

mongoose.connect(dbserver);
var db = mongoose.connection;

db.on('error', function(msg) {
  console.log('Mongoose bit the dust; ' + msg);
});

db.once('open', function() {
  console.log("Mongoose connection established.");
});

const options = {
  directory: './public',
  default: 'index.html'
}

server.get('/', restify.serveStatic(options));

server.listen(port, function() {
  console.log('%s listening on port %s', server.name, port);
});
