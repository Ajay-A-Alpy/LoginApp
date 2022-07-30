const mongoose=require("mongoose");
const jwt=require('jsonwebtoken');
const joi=require('joi');
const passwordComplexity=require('joi-password-complexity')

const userSchema=new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    blockStatus:{type:Boolean}
});


userSchema.methods.generateAuthToken= function(){
    const token=jwt.sign({_id:this._id},"secret",{expiresIn:"7d"})
    return token
}

const User1=mongoose.model("user1",userSchema);

const validate=(data)=>{
    const schema=joi.object({
        username:joi.string().required().label("User Name"),
        email:joi.string().required().label("E-mail"),
        mobile:joi.string().required().label("Mobile"),
        password:passwordComplexity().require().label("Password")
    })
    return schema.validate(data)
};

module.exports= {User1,validate}