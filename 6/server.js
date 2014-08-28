var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic('public'));

var memos = [];
var id = 1;

app.get('/', function(req, res) {
  res.render('index', { memos: memos });
});

app.get('/memo/:id', function(req, res) {
  var memo = memos.filter(function(memo) {
    return parseInt(req.params.id) === memo.id;
  })[0];

  if (memo) {
    res.render('show', { memo: memo });
  }
  else {
    res.status(404);
    res.send('Not Found');
  }
});

app.post('/memo', function(req, res) {
  memos.push({
    id: id++,
    title: req.body.title,
    body: req.body.body
  });

  res.redirect('/');
});

app.listen(3000);
