const { default: mongoose } = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:[String]
    },
    description:{
        type:String
    },
})

module.exports = mongoose.model("ProductSchema", ProductSchema)