const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    password: String,
    booking:[{
        roomNumber:Number,
        datesToBook: [String],
    }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;