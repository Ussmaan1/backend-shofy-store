const { default: mongoose } = require("mongoose")

const ShopSchema = mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    address:{
        type:String
    },
    postalcode:{
        type:String
    },
    contact:{
        type:String
    },
    email:{
        type:String
    },
    remarks:{
        type:String
    },
    
})

module.exports = mongoose.model("ShopSchema", ShopSchema)