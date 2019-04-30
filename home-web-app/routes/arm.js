var express = require('express');
var router = express.Router();
const WebSocket = require('ws');
const toController = new WebSocket(`ws://localhost:8081`);
// const comms = new WebSocket.Server({ port: 8081, noServer: true });

router.post('/', function(req, res, next) {
  console.log(req.body.code);
  if (process.env.CODE === req.body.code) {
    process.env.STATE = "armed"
    toController.send("setState armed")
  }
  res.redirect("/");
});

module.exports = router;
