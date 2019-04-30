const WebSocket = require('ws');
// const browserComms = new WebSocket.Server({ port: 8080 });
const commsHardware = new WebSocket.Server({ port: 8080 });
const commsWeb = new WebSocket.Server({ port: 8081 });

commsHardware.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log("State = %s; Code = %s", process.env.STATE, process.env.CODE);
    console.log(message);
    ws.send('Recieved! ' + message);
    if (message.includes("sensorTrip") && process.env.STATE === "armed") {
      ws.send("ALERT")
    }
    if (message.includes("code ")) {
      var code = message.substring(5)
      console.log(code);
      if (code === process.env.CODE) {
        process.env.STATE = "disarmed"
        ws.send("SLEEP")
      }
    }
    if (message.includes("setState")) {
      var newState = message.substring(9)
      console.log(newState);
      if (newState === "armed") {
        armSystem()
      } else {
        disarmSystem()
      }
    }
  });

});

commsWeb.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    if (message.includes("setCode ")) {
      changeCode(message.substring(8, 12))
    }
    if (message.includes("setState")) {
      var newState = message.substring(9)
      console.log(newState);
      if (newState === "armed") {
        armSystem()
      } else {
        disarmSystem()
      }
    }
  });

  // ws.send('something');
});

function changeCode(code) {
  process.env.CODE = code;
}

function getPasscode() {
  return process.env.CODE
}

function armSystem() {
  process.env.STATE = "armed"
}

function disarmSystem() {
  process.env.STATE = "disarmed"
}
