const express = require("express")
const cors = require('cors')
const { default: mongoose } = require("mongoose")
const UserRouter = require('../Back end/Router/UserRouter')
const ProductRouter = require('./Router/productRouter')
const ShopRouter = require("./Router/ShopRouter")
const categoryRouter = require("./Router/categoryRouter")
const stripe = require("stripe")("sk_test_51PjMXW07hafy59M3BPzYrbvwXw6POqdmT1uQONddInEXon0UrVej7bORup7xgXsVjXAIl7UbkSToj6UuM1ZIrWCi00jxTXU7tf")

mongoose.connect("mongodb+srv://ussmaan1:ussmaan123@cluster0.vjmk83q.mongodb.net/shofy")
.then(()=>{
 console.log("DB connected");
})

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', UserRouter )
app.use('/', ProductRouter)
app.use('/', ShopRouter)
app.use('/', categoryRouter)


app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.name,
                images: product.image
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));
 
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})
 
})


app.listen(4000, ()=>{
    console.log("App running");
})