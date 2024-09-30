const express = require ("express")
const { default: mongoose } = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
})

module.exports =  mongoose.model("userSchema", UserSchema)