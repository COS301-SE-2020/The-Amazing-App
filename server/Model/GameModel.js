const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// @desc game creation schema
let GameSchema = new Schema({
  user_id:{
    type:String,
    required:[true,'Game id is required'],
  },
  name:{
    type: String,
    required: [true, 'Game name is required'],
    unique: [true, 'Game name has to be uniquire ']
  },
  description:{
    type: String,
    required: [true, 'Game description is required']
  },
  properties:[{
    question:{type:String},
    answers:[{type:String}],
    location:{type:String}
  }],
  image:{
    type:String
  },
  date: {
    type: Date,
    default: Date.now,
  }
});
module.exports = mongoose.model('games', GameSchema);
