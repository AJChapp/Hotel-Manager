const db = require('../models');
const mongoose = require('mongoose')


module.exports = function (app) {

    app.get('/search/api/roomsearch', function (req, res) {
        db.Rooms.find({}).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err)
        })
    }),
        app.post('/room/api/findopening', function (req, res) {
            db.Rooms.find(
                {
                    booked: { $nin: req.body.booked }
                    , maxAdult: { $gte: req.body.maxAdult }
                },
            )
                .populate('User')
                .then(function (data) {
                    console.log(data)
                    res.json(data);
                }).catch(function (err) {
                    res.json(err)
                })
        })

    app.post('/booking/api', function (req, res) {
        const userID = mongoose.Types.ObjectId(req.body.user)
        // console.log(req.body)
        // console.log(userID)
        db.Rooms.update(
            { roomNumber: req.body.roomNumber },
            { $addToSet: { booked: { $each: req.body.datesToBook } } },
            { $push: { User: userID }}
        )
            .then((data) => {

                res.json(data)
            }).catch((err) => {
                res.json(err)
            })
    })


};

