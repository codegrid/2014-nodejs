// fs-read.js
var fs = require('fs');

fs.readFile('./test.txt', { encoding: 'utf8' }, function(err, data) {
  if (err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
});
