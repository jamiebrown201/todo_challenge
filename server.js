var express = require('express');
var path = require('path');
var app = express();

var rootpath = path.normalize(__dirname);

app.use(express.static(rootpath));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(9090);
console.log('Listening on port 9090');
