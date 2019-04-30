var express = require('express');
var router = express.Router();
const WebSocket = require('ws');
const toController = new WebSocket(`ws://localhost:8081`);
// const comms = new WebSocket.Server({ port: 8081, noServer: true });

router.post('/', function(req, res, next) {
  console.log(req.body.code);
  if ((req.body.code === process.env.CODE) && (req.body.code1 === req.body.code2)) {
    process.env.CODE = req.body.code1
    toController.send("setCode " + req.body.code1)
  }
  // process.env.CODE = req.body.code
  res.redirect("/");
});

module.exports = router;
