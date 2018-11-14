const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GuestsSchema = new Schema({
    firstName: String,
    lastName : Boolean,
    address: String,
    postalCode: String,
    city: String,
    country: String,
    email: String,
    phone: String,
    member: Boolean,
    

    
});

const Guests = mongoose.model('Guests', GuestsSchema);

module.exports = Guests;