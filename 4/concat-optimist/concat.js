var fs = require('fs');
var argv = require('optimist').argv;

var outString = argv.input.split(',').map(function(file) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}).join('\n');
 
fs.writeFileSync(argv.output, outString, { encoding: 'utf8' });
console.log('Concat successfule! output a "' + argv.output + '"');
