const mongoose = require("mongoose");
// refrence 10/3-19
const Schema = mongoose.Schema;

const RoomsSchema = new Schema({
    roomNumber: {type: Number, required: true, index:{unique:true}},
    booked : [String],
    maxAdult: Number,
    nonSmoking: Boolean,
    rate: Number,
    view:{
        type:String
    },
    squareFt: Number,
    numOfBeds:{
        king: Number,
        queen: Number,
        full: Number,
        twin: Number,
        rollaway:Number
    }
});

const Rooms = mongoose.model('Rooms', RoomsSchema);

module.exports = Rooms;