const express = require("express")
const userService = require("../services/user")

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("Welcome to the user route")
})

userRouter.post("/signup", userService().signUserUp);
userRouter.post("/signin", userService().signUserIn);

module.exports = userRouter;