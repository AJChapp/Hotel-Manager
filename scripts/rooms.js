const mongoose = require('mongoose');
const db = require('../models')

mongoose.connect('mongodb://localhost/project3')
const roomSeed = [
  {
    roomNumber: 200,
    booked: [
      "11/03/2018",
      "11/04/2018"
    ],
    maxAdult: 5,
    nonSmoking: true,
    rate: 200,
    view:{
      type:'Beach'
    },
    squareFt: 540,
    numOfBeds:{
      king: 0,
      queen: 2,
      full: 0,
      twin: 0,
      rollaway: 1
    }

  },
  {
    roomNumber: 404,
    booked: [
      "11/04/2018",
      "11/05/2018"
    ],
    maxAdult: 2,
    nonSmoking: false,
      rate: 800,
      view: {
        type: 'Objstructed'
      },
      squareFt: 501,
      numOfBeds: {
        king: 0,
        queen: 0,
        full: 2,
        twin: 0,
        rollaway: 2
      }
  },
  {
    roomNumber: 300,
    booked: [
      
    ],
    maxAdult: 3,
    nonSmoking: false,
      rate: 150,
      squareFt: 502,
      view: {
        type: 'Objstructed'
      },
      numOfBeds: {
        king: 0,
        queen: 0,
        full: 2,
        twin: 0,
        rollaway: 2
      }
  },
  {
    roomNumber: 100,
    booked: [
      
    ],
    maxAdult: 1,
    nonSmoking: false,
      rate: 700,
      squareFt: 503,
      view: {
        type: 'Objstructed'
      },
      numOfBeds: {
        king: 0,
        queen: 0,
        full: 2,
        twin: 0,
        rollaway: 2
      }
  }
]


db.Rooms
  .remove({})
  .then(() => db.Rooms.collection.insertMany(roomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
