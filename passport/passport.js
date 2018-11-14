const Strategy = require('passport-local').Strategy;

const db = require("../models");

const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    passport.use( 'local',new Strategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true, // allows us to pass back the entire request to the callback
            failureFlash: true//added
          },
        function (req, email, password, cb) {
            db.User.findOne({ email: email }, function (error, users) {
                if(!users){
                    return cb(null, false,{ message: 'Incorrect username.' })//added
                }
                return cb(null, users)
            });        
        })); 

    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function (id, cb) {
        db.User.findOne({_id: id }).then(function (users) {
            cb(null, users);
        });
    }); 

};