var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Isto é um teste com Nodemon');
});

module.exports = router;
