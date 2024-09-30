const Shopschema = require('../Models/Shopschema')
const ShopSchema = require('../Models/Shopschema')

const addshopping = async(req,res)=>{
    var obj = req.body
   await Shopschema.create(obj)
}






module.exports = {addshopping}