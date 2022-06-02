const express = require('express');
const router = express.Router();
const externalModule = require('../logger/logger1')
const myHelper=require("../util/helper")
const stringNew=require("../validator/formatter")

router.get('/test-me', function (req, res) {
    myHelper.getdate();
    myHelper.getmonth();
    myHelper.getbatch();
    stringNew.gettrim();
    stringNew.getlower();
    stringNew.getupper();
    externalModule.welcome1();
    res.send("Welcome to my application. I am Nishant Rathore and a part of FunctionUp Thorium cohort")

});



module.exports = router;
// adding this comment for no reason