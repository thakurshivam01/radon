const BookModel = require("../models/bookModel.js")
const AuthorModel=require("../models/authormodel")
const bookModel = require("../models/bookModel.js")
// const res = require("express/lib/response")

let createAuthor= async(req, res)=>{
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

let createBook = async(req, res)=>{
    let data=req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
    }

let getBooksbyChetanBhagat= async(req, res)=>{
    let data = await AuthorModel.find({ Author_name:"Chetan Bhagat"}).select("author_id")
    let BookData =await BookModel.find({author_id:data[0].author_id})
    res.send({ msg: BookData })
}
let authorofBook=async(req,res)=>{
    let data=await AuthorModel.findOneAndUpdate({name:"Two States"},{$set:{prices:100}},{new:true})
    let AuthorData =await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let price=data.prices
    res.send({ msg:AuthorData,price })
}
const priceBook = async function (req, res) {
    let book = await BookModel.find({ price: { $gt: 49, $lt: 101 } }).select({
      author_id: 1,
      id: 0,
    });
    let Author1=await AuthorModel.find({$or:book}).select({author_id:1,id:0});
    res.send(Author1)
  };
  



module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.getBooksbyChetanBhagat = getBooksbyChetanBhagat
module.exports.authorofBook = authorofBook
