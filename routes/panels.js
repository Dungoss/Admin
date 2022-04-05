var express = require('express');
var router = express.Router();
const panelsController = require('../controller/panelsController');

/* GET home page. */
router.get('/', panelsController.panels);

module.exports = router;
