var http = require('http');

// HTTPサーバーのオブジェクトを作成
var server = http.createServer(function(req, res) {
  // リクエストがあるたびにここが呼ばれる
});

// localhostの8000番ポートでサーバーを起動する
server.listen(8000);
