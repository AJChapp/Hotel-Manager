const bcrypt = require('bcryptjs');
const db = require('../models');


module.exports = function (app, passport) {
    // Process the login form
    app.post('/api/user/login', passport.authenticate("local"), function (req, res) {
        res.json({ user: req.user })
    });

    //checks if email is in database
    app.post('/api/user/email', function (req, res) {
        db.User.findOne(req.body).then((response) => {
            if (response) {
                res.json({ success: false })
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

    app.post('/api/user/booking', function (req, res) {
        // console.log(req.user._id)
        // console.log(req.body)
        db.User.update(
            { _id: req.user._id },
            { $addToSet: { booking: req.body } }
        ).then((data) => {
            // console.log(data)
            res.json({ success: true })
        }).catch((err) => {
            res.json(err)
        })
    })

    app.get('/api/user/data', function (req, res) {
        if (!req.user) {
            res.json('LogIn')
        }
        else if (req.user) {
            db.User.findOne({ _id: req.user._id }
                ).then((data)=>{
                    console.log(data.booking)
                    res.json(data.booking)
                }).catch((err)=>{
                    res.json(err)
                })
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