const express = require('express');
const router = express.Router();
const authenticationController = require('../controller/authenticationController');
const passport = require('../models/passport');


/* GET home page. */
router.get('/register', authenticationController.registerShow);

router.post('/register', authenticationController.register);

router.get('/login', authenticationController.loginShow);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

router.get('/logout', authenticationController.logout);

module.exports = router;
