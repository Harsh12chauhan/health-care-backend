const mongoose = require('mongoose')
const { Schema } = mongoose;
const UserSchema = new Schema({
  name:{
      type: String,
      required: true
  },
  phone:{
      type:String,
      required:true
  },
  age:{
      type:String,
      required:true
  },
  date:{
      type:Date,
      default:Date.now
  },
});

module.exports = mongoose.model('user',UserSchema)