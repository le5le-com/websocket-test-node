var ws = require('nodejs-websocket');

// Scream server example: "hi" -> "HI!!!"
var server = ws
  .createServer(function (conn) {
    console.log('New connection');

    conn.sendText(
      JSON.stringify({
        event: 'test-color',
        data: [
          {
            key: 'font.color',
            value: 'red',
          },
        ],
      })
    );
    conn.on('text', function (str) {
      console.log('Received ' + str);
      conn.sendText(str);
    });
    conn.on('close', function (code, reason) {
      console.log('Connection closed');
    });
  })
  .listen(31800);
