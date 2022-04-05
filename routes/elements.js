var express = require('express');
var router = express.Router();
const elementsController = require('../controller/elementsController');

/* GET home page. */
router.get('/', elementsController.elements);

module.exports = router;
