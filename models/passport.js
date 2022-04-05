const passport = require('passport');
const LocalStrategy = require('passport-local');
const authenticationService = require('../models/services/authenticationService');


passport.use(new LocalStrategy(async function verify(username, password, cb) {
    const user = await authenticationService.verifyUser(username, password);
    console.log(user);

    if(user)
        return cb(null, user);
    return cb(null, false);
}));


passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user._id, username: user.username });
    });
});

  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
});

module.exports = passport;