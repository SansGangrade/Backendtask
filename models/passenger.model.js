const mongoose = require('mongoose');

const passangerSchema = mongoose.Schema({
    id : {
        type : String,
        unique : true,
        required : true,
        trim : true
    },
    name : {
        type : String,
        required : [true,"Please Provide Passanger Name"],
        trim : true
    },
    trips : {
        type : Number,
        required : [true,"Please Provide Passanger trips"],
    },
    airline : [{
        type : mongoose.Schema.Types.Number,
        ref: "Airline",
        required : [true,"Please Provide Airline id"],
    }]
},{
    timestamps : true
})

module.exports = mongoose.model("Passangers",passangerSchema);
