var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    // index.htmlを読み込む
    fs.readFile(__dirname + '/index.html', { encoding: 'utf8' }, function(err, html) {
      // ファイルの読み込みに失敗したらエラーのレスポンスを返す
      if (err) {
        res.statusCode = 500;
        res.end('Error!');
      }
      // ファイルの読み込みが成功したらHTMLを返す
      else {
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
      }
    });
  }
  else if (req.method === 'POST' && req.url === '/list') {
    var data = '';

    req.on('readable', function(chunk) {
      data += req.read();
    });
    req.on('end', function() {
      console.log(data);
      res.end('ok!');
    });
  }
  else {
    res.statusCode = 404;
    res.end('Not Found!!');
  }
});

server.listen(8000);
