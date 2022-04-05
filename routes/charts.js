var express = require('express');
var router = express.Router();
const chartsController = require('../controller/chartsController');

/* GET home page. */
router.get('/', chartsController.charts);

module.exports = router;
