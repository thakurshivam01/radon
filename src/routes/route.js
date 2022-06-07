const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



router.post('/createBook',  BookController.getBookData  );

router.get('/getBooks',  BookController.newBookData  );

router.post('/getBookInYear',  BookController.getBookInYear  );

router.post('/getParticularBooks',  BookController.getParticularBooks  );

router.get('/getXINRBook',  BookController.getXINRBook  );

router.get('/getRandomBook',  BookController.getRandomBooks  );
 
module.exports = router;