// fs-read.js
var fs = require('fs');

fs.readFile(__dirname + '/test.txt', { encoding: 'utf8' }, function(err, data) {
  if (err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
});
