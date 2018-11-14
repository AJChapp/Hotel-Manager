const mongoose = require('mongoose');
const db = require('../models')

mongoose.connect('mongodb://localhost/project3')
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
