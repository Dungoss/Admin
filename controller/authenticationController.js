const authenticationService = require('../models/services/authenticationService')


exports.register = async (req, res, next) => {
    await authenticationService.register(req.body.username, req.body.password, req.body.c_password, req.body.firstname, req.body.lastname, req.body.address, req.body.phonenumber, req.body.email);

    res.redirect('/');
}

exports.registerShow = (req, res, next) => {
    res.render('register', {title: 'Register'});
}

exports.loginShow = (req, res, next) => {
    if(req.user) {
        res.locals.user = req.user;
        res.redirect('/');
    }
    else
        res.render('login', { title: 'Login'});
}

exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
  };