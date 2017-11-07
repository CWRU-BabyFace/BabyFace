var db = require("../models");
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, dbUser){

//passport config
passport.use(new LocalStrategy(
  function(username, password, done) {

    db.User.findOne({ where: {name: username} }, function(err, user) {
    	console.log(user);
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      res.render("userhome");
      return done(null, user);
    });
  }
));

}