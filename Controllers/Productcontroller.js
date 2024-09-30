const CategorySchema = require('../Models/CategorySchema')
const productSchema = require('../Models/ProjuctSchema')

const addProduct  = async(req,res)=>{
    var obj = req.body
    var response = await productSchema.create(obj)

    var categoryItem = await CategorySchema.findOne({categoryname: response.category})
    categoryItem?.products.push(response._id)
    res.json({message: "Item added"})
}

const getProducts = async(req,res)=>{
    var response = await productSchema.find()
    res.json({message: "item showed", response})
}

const getOne = async(req, res)=>{
    var response = await productSchema.findOne({_id: req.params.id})
    res.send({message: "item retreived", response})
}

module.exports = {addProduct, getProducts, getOne}