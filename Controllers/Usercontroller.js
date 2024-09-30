const UserSchema = require('../Models/UserSchema')
const bcrypt = require('bcrypt')

const Getdata =  async(req,res)=>{
    var obj = req.body
    const hashedpassword =await bcrypt.hash(obj.password, 10)
    obj.password = hashedpassword
    await UserSchema.create(obj)
    res.json({message: "User created"})
}

const Signedin = async(req,res)=>{
    var obj = req.body
    var verifyuser = await UserSchema.findOne({email: obj.email})

    if(!verifyuser){
        return res.json({message: "user not found"})
    }

    var matchpassword = await bcrypt.compare(obj.password, verifyuser.password)

    if(!matchpassword){
        return res.json({message: "password incorrect"})
    }


return res.json({message : "login successfull!!!"})
}

module.exports = {Getdata, Signedin}