var express = require('express');
var Path = require('path');
var compression = require('compression');

var app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(Path.resolve(__dirname, 'dist')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(Path.resolve(__dirname, 'dist', 'index.html'));
})

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});