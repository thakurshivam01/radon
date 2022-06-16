const jwt = require("jsonwebtoken");
// const middleware = (req, res, next) => {
//   console.log("hello middleware");

//   next();
// };

const authenticate = function(req, req, next) {
  try {
    let token = req.headers["x-Auth-token"];
     if(!token) token =req.headers["x-Auth-token"];
     if(!token) return res.send({status:false, msg:"token must be present"})
     if(!decodeToken) res.send({status:false, msg:"token is invalid"})
    res.status(400).send({msg: "error", error : err. massage})
    }
     catch(err){
        console.log("this is the err" )
     }   
     next();
 }
 
 
 const authorise = function(req, res, next) {
    try{
         let token = req.headers["x-Auth-token"];
 let decodeToken = jwt.verify(token, "functionup-radon");
 let userToBeModified = req.params.userId
 let userLoggedIn = decodeToken.userId 
 if(userToBeModified != userLoggedIn) 
 
 return res.status(400).send({status:"false", msg:"yor r not authorized to update another data"}) 
 
 }
 catch(error){
        res.send(error)
 }
     next()
 }
 

 module.exports.authenticate = authenticate
 module.exports.authorise = authorise
