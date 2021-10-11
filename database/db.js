const mongoose = require('mongoose');


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p1j4s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const dbConn = mongoose.connection;

dbConn.on("error",console.error.bind(console,"Connection error"));
dbConn.on("open",function(){
 console.log("Connection Successful")
})

module.exports = dbConn;
