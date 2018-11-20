const mongoose = require('mongoose');
const db = require('../models')
//local
// mongoose.connect('mongodb://localhost/project3')

mongoose.connect('mongodb://heroku_r4z8zrzt:99gtgislo0s2kkqfrgvqumvfbl@ds161183.mlab.com:61183/heroku_r4z8zrzt')
const guestsSeed = [
    {

    }
]


db.Guests
    .remove({})
    .then(() => db.Guests.collection.insertMany(guestsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
