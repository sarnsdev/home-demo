var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.CODE);
  // if (typeof process.env.CODE === 'undefined') {
  //
  // }
  res.render('recordings', { passcode: process.env.CODE });
});

module.exports = router;
