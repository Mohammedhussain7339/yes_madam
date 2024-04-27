
const mongoose= require('mongoose');
const MongoURI = process.env.MONGO_URI ;
mongoose.connect( MongoURI)
.then(()=>{
    console.log("database is connected")
}).catch(()=>{
    console.log("database is not connected");
})


