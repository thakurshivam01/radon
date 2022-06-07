
const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  authore_id:{
    type:String,
    required:true
  },
  prices: Number,
  ratings:Number
}, {timestamps:true });

module.exports = mongoose.model('Book', bookSchema) 

