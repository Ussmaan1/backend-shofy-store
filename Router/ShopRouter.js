const express = require("express")
const {addshopping} = require('../Controllers/ShopController')

const ShopRouter =  express.Router()


ShopRouter.post('/sendData', addshopping)







module.exports = ShopRouter