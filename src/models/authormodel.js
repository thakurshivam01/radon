const mongoose = require("mongoose");
// const { schema } = require("./");

const authorSchema=new mongoose.Schema({
    author_id:{
        type:String,
        unique:true,
        required:true,
    },
    auhtor_name:String,
    age:Number,
    address:String


},{timestamps: true })

module.exports=mongoose.model('Author',authorSchema)