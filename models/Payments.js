const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentsSchema = new Schema({

booking:{
    type: Schema.Types.ObjectId,
    ref: "Booking"
},
guest:{
    type: Schema.Types.ObjectId,
    ref:"Guests"
},
total:Number,
paid:Number,
payTime:Date,
invoice:String,


});

const Payments = mongoose.model('Payments', PaymentsSchema);

module.exports = Payments;
