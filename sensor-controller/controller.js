const WebSocket = require('ws');
const browserComms = new WebSocket.Server({ port: 8080 });
const 


browserComms.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if (message.includes("code:")) {

    }
  });

  ws.send('Recieved!');
});
