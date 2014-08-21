var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url === '/') {
    res.end('index page!\n');
  }
  else if (req.url === '/list') {
    res.end('list page!\n');
  }
  else {
    res.statusCode = 404;
    res.end('Not Found!!\n');
  }
});

server.listen(8000);
