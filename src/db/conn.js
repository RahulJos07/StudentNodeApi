const mongoose = require('mongoose');
require("dotenv").config({ path: '../db/.env' }); 
// //connect with mongodb with db name
// mongoose.connect("mongodb://localhost:27017/students-api", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("connection is succesful");
// }).catch((e)=>{
//     console.log("no connection");
// })

//connect with mongodb atlas
//process.env.MONGO_URL
mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("no connection");
})