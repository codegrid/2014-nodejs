var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url === '/') {
    res.end('index page!');
  }
  else if (req.url === '/list') {
    res.end('list page!');
  }
});

server.listen(8000);
