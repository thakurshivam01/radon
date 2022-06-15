
const { application } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const middleware = require("../middleware/auth");




router.post("/users", userController.createUser);

router.post("/login",  userController.loginUser);

router.get("/users/:userId", userController.getUserData);

router.post("/postMessage/:userId/post",middleware.authenticate,middleware.authorise, userController.postMessage);

router.put("/users/:userId",middleware.authenticate,middleware.authorise, userController.updateUser);

router.delete("/users/:userId",middleware.authenticate,middleware.authorise, userController.deleteUser);

module.exports = router;
