var express = require('express');
var router = express.Router();
const widgetsController = require('../controller/widgetsController');

/* GET home page. */
router.get('/', widgetsController.widgets);

module.exports = router;
