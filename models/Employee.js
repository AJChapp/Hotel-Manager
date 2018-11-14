const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: String,
    lastName : Boolean,
    address: String,
    postalCode: String,
    city: String,
    country: String,
    email: String,
    phone: String,
    position: String,
    pay:{
        isSalary: Boolean,
        monthlyPay: Number,
        hourlyRate: Number,
    },
    currentCheck:{
        timeWorked: Number,
        currentTotal: Number,
    },
    career:{
        dateHired: Date,
        hoursWorked: Number,
        daysWorked:Number,
    },
    schedule:{
        cantWork: [{
            day:String,
            time:String,
        }],
        requestedDaysOff:Array,
    },
    paymentInfo:{
        type:Schema.Types.ObjectId,
        ref:'EmployeePay'
    }
    

    
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;