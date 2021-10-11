const mongoose = require('mongoose');

const airlineSchema = mongoose.Schema({
    id : {
        type : Number,
        required : [true, "Please Provide Airline Id"],
        unique : true
    },
    name : {
        type : String,
        unique : true,
        trim : true,
        required : [true, "Please Provide Airline Name"]
    },
    country : {
        type : String,
        trim : true,
        required : [true, "Please Provide Airline Country"]
    },
    logo : {
        type : String,
    },
    slogan : {
        type : String,
        trim : true
    },
    head_quarters : {
        type : String,
        trim : true,
        required : [true, "Please Provide Airline Headquarter"]
    },
    website : {
        type : String,
        unique : true,
        required : [true, "Please Provide Airline Website"]
    },
    established : {
        type : String,
        trim : true,
        required : [true, "Please Provide Airline Year of Establishment"]
    }
},{
    timestamps : true
})

module.exports = mongoose.model("Airline",airlineSchema);
