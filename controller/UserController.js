const UserModel = require("../models/UserModel")
const userModel = require("../models/UserModel")

exports.addUser = (req, res) => {
    const User = new UserModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        age:req.body.age
    })
    user.
        save().
        then( (data) => {
            res.send(data)
        }).
        catch( (error) =>{
            res.send(error)
        })
}