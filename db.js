const mongoose= require('mongoose');
const mongoURI = 'mongodb://localhost:27017/appointments';
// const mongoURI = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false';
const connecttoMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo sucessfully");
    })
}
module.exports = connecttoMongo;