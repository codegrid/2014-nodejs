// concat.js
var fs = require('fs');
var srcFiles = process.argv.slice(2);
var outFile = srcFiles.pop();

var outString = srcFiles.map(function(file) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}).join('\n');

fs.writeFileSync(outFile, outString, { encoding: 'utf8' });
console.log('Concat successful! output a "' + outFile + '"');
