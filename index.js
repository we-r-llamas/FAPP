var express = require('express');
var app = express();

app.use("/", express.static(__dirname + '/'));
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});