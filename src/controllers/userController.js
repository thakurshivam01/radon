const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
try{
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.status(400).createUsersend({ msg: savedData })
  
}
catch(error){
  res.send(error)
}
}


const loginUser = async function (req, res) {
 try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  
    let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(400).send({ status: true, data: token });
  
}

  catch(error){
    res.send(error)
  }

};



const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.status(400).send({ status: true, data: userDetails });
  }
catch(error){
  res.send(error) 
};  
}


const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(400).send({ status: updatedUser, data: updatedUser });
}
catch(error){
  res.send(error)
}
};

const postMessage = async function (req, res) {
try{
  let message = req.body.message

    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.status(400).send({status: true, data: updatedUser})
}
catch(error){
  res.send(error);
}
}
const deleteUser = async function (req,res){
  try{
  let token = req.headers["x-Auth-token"];
  if(!token) token = req.headers["x-auth-token"];
  if(!token) return res.send({status: flase, msg:"token must be present"});
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
  return res.send({status: false, msg:"token is invalid"});
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(!user) {
    return res.send("No such user exists"); 
  }
  await userModel.findOneAndUpdate({_id:userId}, {$set:{isDeleted: true}})
  res.status(400).send("The User is Deleted")
}
catch(error){
  res.send(error);
}
  }
  

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser