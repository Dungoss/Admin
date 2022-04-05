var express = require('express');
var router = express.Router();
const usersController = require('../controller/usersController');

/* GET users listing. */
router.get('/', usersController.users);

module.exports = router;
