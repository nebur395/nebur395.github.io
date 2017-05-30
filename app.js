var express = require('express');

var app = express();
app.use(express.static('./public'));

app.use('/', function(req, res) {
    console.log("Bienvenido");
});

app.listen(8080, function(){
    console.log("Server listening to PORT 8080");
});

module.exports = app;
