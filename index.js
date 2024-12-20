const express = require("express")
const connectToDB = require("./src/config/index")
const userRouter = require("./src/routes/user")

const app = express()
app.use(express.json())

connectToDB();

app.use("/api/v1/users", userRouter)

const port = 2024;
app.listen(port, console.log("App connected to port:", port))