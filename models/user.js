var mongoose = require("mongoose")

var productModel = mongoose.Schema({
    type : String,
    data : Object,
    logo : String, 
    bodyShape : String,
    EyeFrameShape : String,
    EyeBallShape : String,
    Frame : String,
    color : String,
    jpg : String,
    png : String,
    pdf : String,
    eps : String
})

var userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    token : String,
    salt : String,
    qrCodes : [productModel]
})

var userModel = mongoose.model('user', userSchema)
module.export=userModel