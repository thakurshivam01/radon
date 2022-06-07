const express = require("express")
// const { router } = require("express/lib/application")
const router = express.Router();

const BookController=require("../controllers/bookController")
// const BookController1=require("../models/bookModel")


router.post("/createAuthor", BookController.createAuthor)
router.post("/createBook", BookController.createBook)
router.get("/getBooksbyChetanBhagat", BookController.getBooksbyChetanBhagat)
router.get("/authorofBook", BookController.authorofBook)

module.exports = router