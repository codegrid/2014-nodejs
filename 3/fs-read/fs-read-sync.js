// fs-read-sync.js
var fs = require('fs');

var data = fs.readFileSync(__dirname + '/test.txt', { encoding: 'utf8' });
console.log(data);
