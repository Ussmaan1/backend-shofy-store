const { default: mongoose } = require("mongoose")

const CategorySchema = mongoose.Schema({
    categoryname:{
        type: String
    },
    image:{
        type: String
    },
    products: {
        type: [mongoose.Schema.ObjectId],
        ref: "ProductSchema"
    }

})

module.exports = mongoose.model("CategorySchema", CategorySchema)