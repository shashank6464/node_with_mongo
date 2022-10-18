// importing express module (as a const)

const express = require("express")

// importing mongoose

const mongoose = require("mongoose")

//importing router
const routes = require("./routes/routes")



// initializing express app

const app = express()

//for creating server on port 3000
app.listen(3000, () => {
    console.log("Server runnig on port 3000")
})

app.use(express.json())

//default route ("/") with response of a string
app.use("/welcome", (req,res) => {res.send("Welcome to the node application here")})

app.use("/user", routes)

//connecting database with mongoose library (mongoose.connect())
const uri="mongodb+srv://shashank:12345@cluster0.dmji71d.mongodb.net/employeeNodejs?retryWrites=true&w=majority"
mongoose.
        connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database connected")}).
        catch((error) => {console.log(error)})

