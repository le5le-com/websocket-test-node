const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('New connection');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send(
    JSON.stringify({
      tag: 'tag1',
      fontColor: 'red',
      text: 'A websocket text.',
    })
  );
});
