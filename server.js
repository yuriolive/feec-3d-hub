var express = require('express');
var compression = require('compression');
var serveStatic = require('serve-static');
var path = require('path');

var app = express();

app.use(compression());
app.use(serveStatic(path.join(__dirname, 'dist')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  if(req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect('https://' + req.get('host') + req.originalUrl);
  }
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});
