const mongoose = require('mongoose');

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
mongoose.connect("mongodb+srv://student_api:student_api@cluster0.sueqi.mongodb.net/StudentDB?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection is succesful");
}).catch((e)=>{
    console.log("no connection");
})