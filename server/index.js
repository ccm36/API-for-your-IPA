var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mysql');


var app = express();


app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('https://api.punkapi.com/v2/beers', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data)
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

