const bcrypt = require('bcryptjs');
const db = require('../models');

//line 17 27

module.exports = function (app, passport) {
    // Process the login form
    app.post('/api/user/login', passport.authenticate("local"), function (req, res) {
        console.log('user')
        console.log(res)
        res.json({ success: true, user: req.user })
    });

    //checks if email is in database
    app.post('/api/user/email', function (req, res) {
        db.User.findOne(req.body).then((response) => {
            console.log(response)
            if (response) {
                res.json({success:false})
            }
            else {
                
                res.json({ success: true })
            }
        })
    })
    //logout
    app.get('/api/user/logout', function (req, res) {
        req.logout();
        res.json('Logged Out')
    });
    //checks if user is logged in
    app.get('/api/user/loggedCheck', function (req, res) {
        if (req.user) {
            res.json(true)
        }
        else {
            res.json(false)
        }
    })



    //newUser
    app.post("/api/newuser", function (req, res) {

        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
        }

        // Encryption
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newUser.password, salt, function (err, hash) {
                // Store hash in your password DB.
                newUser.password = hash
                db.User.create(newUser).then((response) => res.json({
                    success: true,
                    response
                }));
            }); // bcrypt.hash
        }); // bcrypt.genSalt
    }); // app.post

}