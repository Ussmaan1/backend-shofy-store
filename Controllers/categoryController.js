const CategorySchema = require('../Models/CategorySchema')
const productSchema = require('../Models/ProjuctSchema')


const addcategory  = async(req,res)=>{
    var obj = req.body
    await CategorySchema.create(obj)
    res.json({message: "Item added"})
}

const sendcategory= async(req,res)=>{
    var resp = await CategorySchema.find()
    res.send(resp) 
}

const getCategoryProducts = async(req, res)=>{
    console.log(req.params.category, "req.params.category");
    
    var response = await productSchema.find({category: req.params.category})
    res.send({message: "item retreived", response})
}

module.exports = {addcategory, sendcategory, getCategoryProducts}