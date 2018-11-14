const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    cancelled: Boolean,
    arrival: Date,
    checkout: Date,
    RoomId: {
        type: Schema.Types.ObjectId,
        ref: "Rooms"
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Guests"
    },
    comment: String,
    cancelBy: Date,



});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
