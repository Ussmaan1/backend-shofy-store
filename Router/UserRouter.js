const express = require("express")
const { Getdata, Signedin } = require('../Controllers/Usercontroller')
const Router = express.Router()

Router.post('/signup',Getdata)
Router.post('/signnin',Signedin)


module.exports = Router