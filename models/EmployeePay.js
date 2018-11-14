const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeePaySchema = new Schema({
    accountNum:Number,
    routingNum: Number,
    Employee:{
        type: Schema.Types.ObjectId,
        ref:'Employee'
    }


});

const EmployeePay = mongoose.model('EmployeePay', EmployeePaySchema);

module.exports = EmployeePay;
