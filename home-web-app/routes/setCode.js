var express = require('express');
var router = express.Router();
const WebSocket = require('ws');
const toController = new WebSocket(`ws://localhost:8081`);
// const comms = new WebSocket.Server({ port: 8081, noServer: true });

router.post('/', function(req, res, next) {
  console.log(req.body.code);
  process.env.CODE = req.body.code
  toController.send("setCode " + req.body.code)
  // toController.on('connection', function open(ws) {
  //   ws.send(req.body.code);
  //   console.log("sending");
  // });
  // toController.onopen = () => {
  //   toController.send('web: newCode ' + req.body.code);
  // }
  // toController.on("open", function open() {
  //   console.log("Port open");
  //   toController.send('web: newCode ' + req.body.code);
  // })
  res.redirect("/");
});

module.exports = router;
