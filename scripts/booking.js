const mongoose = require('mongoose');
const db = require('../models')

mongoose.connect('mongodb://localhost/project3')
const bookingSeed = [
    {
        cancelled: false,
        arrival: new Date(2018, 10, 30),
        checkout: new Date(2018, 11, 4),
        RoomId: ObjectId("5bc68debbd1a5728f06f95a1"),
        comment: 'Would like stuff',
  },
    {
        cancelled: false,
        arrival: new Date(2018, 11, 3),
        checkout: new Date(2018, 11, 6),
        RoomId: ObjectId("5bc68debbd1a5728f06f95a2"),
        comment: '',
  },
]


db.Booking
    .remove({})
    .then(() => db.Booking.collection.insertMany(bookingSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
