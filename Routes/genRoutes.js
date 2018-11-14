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
            ).then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(err)
            })
        })

    app.post('/booking/api', function (req, res) {
        console.log(req.body)
        db.Rooms.update({ roomNumber: req.body.roomNumber }, { $addToSet: { booked: { $each: req.body.datesToBook } } })
            .then((data) => {
                res.json(data)
            }).catch((err) => {
                res.json(err)
            })
    })


};

