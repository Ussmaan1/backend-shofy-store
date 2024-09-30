const express = require("express")
const {addProduct, getProducts, getOne} =  require('../Controllers/Productcontroller')

 const ProductRouter = express.Router()


ProductRouter.post('/addproducts', addProduct)
ProductRouter.get('/getData', getProducts)
ProductRouter.get('/getOneProduct/:id', getOne)

 module.exports = ProductRouter