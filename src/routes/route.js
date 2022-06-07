const { Router } = require("express")
const { route } = require("express/lib/application")
const BookController=require("../models/authormodel")
const BookController=require("../models/bookModel")




router.post("/createAuthor", BookController.createAuthor)
router.post("/createBook", BookController.createBook)
router.get("/getBooksbyChetanBhagat", BookController.getBooksbyChetanBhagat)
router.get("/authorofBook", BookController.authorofBook)

module.exports = router