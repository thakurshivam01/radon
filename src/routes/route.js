const express = require('express');
const _=require("lodash")
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
router.get('/hello',function(req,res){
    console.log(_.chunk(["january","feb","mar","april","may","june","july","august","sept","oct","nov","dec"],4));
    res.send("check console");

    console.log(_.tail([1,3,5,7,9,11,13,15,17,19]));

    let array1=[1,2,3];
    let array2=[2,5,90];
    let array3=[5,1,31];
    let array4=[6,70,9];
    let array5=[1,6,7];
    console.log(_.union(array1,array2,array3,array4,array5))

    const arr=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    console.log(_.fromPairs(arr))
})


module.exports = router;
// adding this comment for no reason