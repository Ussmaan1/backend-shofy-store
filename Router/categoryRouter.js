const express = require("express")
const { addcategory, sendcategory} = require('../Controllers/categoryController')
const { getCategoryProducts } = require("../Controllers/categoryController")

const categoryRouter =  express.Router()


categoryRouter.post('/addcategory', addcategory)
categoryRouter.get('/getcategoryData', sendcategory)
categoryRouter.get('/getcategoryProducts/:category', getCategoryProducts)







module.exports = categoryRouter