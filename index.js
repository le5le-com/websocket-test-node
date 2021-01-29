var ws = require('nodejs-websocket');

// Scream server example: "hi" -> "HI!!!"
var server = ws
  .createServer(function (conn) {
    console.log('New connection');
    conn.sendText(`{"a":123}`);
    conn.on('text', function (str) {
      console.log('Received ' + str);
      conn.sendText(str);
    });
    conn.on('close', function (code, reason) {
      console.log('Connection closed');
    });
  })
  .listen(31800);
