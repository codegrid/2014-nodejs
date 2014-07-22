// fs-write.js
var fs = require('fs');

// test.txtを新しく作り、「Hello fs!」と書き込む
fs.writeFile('./test.txt', 'Hello fs!', { encoding: 'utf8' }, function(err) {
  // 書き込み処理が終わったらこのコールバック関数が呼ばれる
  if (err) {
    console.error(err);
  }
  else {
    console.log('ok!');
  }
});
